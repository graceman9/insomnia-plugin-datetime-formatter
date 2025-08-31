#!/usr/bin/env node

/**
 * Simple test script for the DateTime Add plugin
 * This script tests the plugin functionality without Insomnia
 */

// Mock Insomnia context
const mockContext = {
  request: {
    getUrl: () => 'https://api.example.com/test',
    getMethod: () => 'GET'
  }
};

// Import the plugin (simulate how Insomnia would load it)
const plugin = require('./main.js');

async function testPlugin() {
  console.log('🧪 Testing Insomnia Plugin: DateTime Formatter v0.0.1\n');

  const templateTag = plugin.templateTags[0];

  // Test cases
  const testCases = [
    {
      name: 'Current datetime (default)',
      args: [0, 0, 0, 0, 0, 0, 'YYYY-MM-DD HH:mm:ss', 'UTC']
    },
    {
      name: 'Add 1 day',
      args: [0, 0, 1, 0, 0, 0, 'YYYY-MM-DD HH:mm:ss', 'UTC']
    },
    {
      name: 'Subtract 2 hours',
      args: [0, 0, 0, -2, 0, 0, 'YYYY-MM-DD HH:mm:ss', 'UTC']
    },
    {
      name: 'Add 30 minutes, custom format',
      args: [0, 0, 0, 0, 30, 0, 'MMMM Do YYYY, h:mm:ss a', 'UTC']
    },
    {
      name: 'Add 1 year and 6 months',
      args: [1, 6, 0, 0, 0, 0, 'YYYY-MM-DD', 'UTC']
    },
    {
      name: 'Complex: Add 2 days, 3 hours, 15 minutes',
      args: [0, 0, 2, 3, 15, 0, 'YYYY-MM-DD HH:mm:ss', 'UTC']
    }
  ];

  console.log('📊 Test Results:\n');

  for (const testCase of testCases) {
    try {
      const result = await templateTag.run(mockContext, ...testCase.args);
      console.log(`✅ ${testCase.name}:`);
      console.log(`   Result: ${result}`);
      console.log(`   Format: ${testCase.args[6]}`);
      console.log('');
    } catch (error) {
      console.log(`❌ ${testCase.name}:`);
      console.log(`   Error: ${error.message}`);
      console.log('');
    }
  }

  console.log('🎉 Plugin testing completed!');
}

// Handle timezone test
async function testTimezone() {
  console.log('\n🌍 Testing Timezone Support:\n');

  const templateTag = plugin.templateTags[0];
  const timezones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

  for (const tz of timezones) {
    try {
      const result = await templateTag.run(mockContext, 0, 0, 0, 0, 0, 0, 'YYYY-MM-DD HH:mm:ss Z', tz);
      console.log(`✅ ${tz}: ${result}`);
    } catch (error) {
      console.log(`❌ ${tz}: ${error.message}`);
    }
  }
}

// Run tests
testPlugin()
  .then(() => testTimezone())
  .then(() => {
    console.log('\n✅ All tests completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Test failed:', error);
    process.exit(1);
  });
