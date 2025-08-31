const moment = require('moment-timezone');

/**
 * Insomnia Plugin: DateTime Add
 * Allows adding/subtracting time units to current datetime and formatting the result
 */
module.exports = {
  templateTags: [{
    name: 'datetimeFormatter',
    displayName: 'DateTime Formatter',
    description: 'Format current datetime with optional offsets and timezone',
    args: [
      {
        displayName: 'Years',
        description: 'Number of years to add (can be negative)',
        type: 'number',
        defaultValue: 0
      },
      {
        displayName: 'Months',
        description: 'Number of months to add (can be negative)',
        type: 'number',
        defaultValue: 0
      },
      {
        displayName: 'Days',
        description: 'Number of days to add (can be negative)',
        type: 'number',
        defaultValue: 0
      },
      {
        displayName: 'Hours',
        description: 'Number of hours to add (can be negative)',
        type: 'number',
        defaultValue: 0
      },
      {
        displayName: 'Minutes',
        description: 'Number of minutes to add (can be negative)',
        type: 'number',
        defaultValue: 0
      },
      {
        displayName: 'Seconds',
        description: 'Number of seconds to add (can be negative)',
        type: 'number',
        defaultValue: 0
      },
      {
        displayName: 'Format',
        description: 'Moment.js format string (e.g., YYYY-MM-DD HH:mm:ss)',
        type: 'string',
        defaultValue: 'YYYY-MM-DD HH:mm:ss'
      },
      {
        displayName: 'Timezone',
        description: 'Timezone for the output (e.g., UTC, America/New_York)',
        type: 'string',
        defaultValue: 'UTC'
      }
    ],
    async run(context, years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, format = 'YYYY-MM-DD HH:mm:ss', timezone = 'UTC') {
      try {
        // Initialize datetime with timezone (default UTC)
        const tz = timezone || 'UTC';
        let date = moment().tz(tz);

        // Add/subtract time units
        date = date.add({
          years: parseInt(years) || 0,
          months: parseInt(months) || 0,
          days: parseInt(days) || 0,
          hours: parseInt(hours) || 0,
          minutes: parseInt(minutes) || 0,
          seconds: parseInt(seconds) || 0
        });

        // Format the result
        return date.format(format);
      } catch (error) {
        console.error('DateTime Add Plugin Error:', error);
        return `Error: ${error.message}`;
      }
    }
  }]
};
