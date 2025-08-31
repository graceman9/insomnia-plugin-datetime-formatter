# 🧪 Testing Guide

## Manual Testing in Insomnia

### Setup
1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Test the Plugin**:
   ```bash
   node test.js
   ```

3. **Load in Insomnia**:
   - Copy the plugin folder to your Insomnia plugins directory
   - **macOS**: `~/Library/Application Support/Insomnia/plugins/`
   - **Windows**: `%APPDATA%\Insomnia\plugins\`
   - **Linux**: `~/.config/Insomnia/plugins/`
   - Restart Insomnia

### Test Cases

#### Basic Functionality
1. Create a new HTTP request
2. In any field, type `{{` to open template tags
3. Select `DateTime Add` from the list
4. Test with default parameters (should show current datetime)

#### Parameter Testing
- **Years**: Set to `1`, should add 1 year
- **Months**: Set to `6`, should add 6 months
- **Days**: Set to `7`, should add 7 days
- **Hours**: Set to `12`, should add 12 hours
- **Minutes**: Set to `30`, should add 30 minutes
- **Seconds**: Set to `45`, should add 45 seconds
- **Format**: Try different Moment.js formats
- **Timezone**: Test different timezones
- **Input**: Provide Unix seconds/ms or ISO string to format a specific timestamp

#### Negative Values
- Set **Hours** to `-2` (should subtract 2 hours)
- Set **Days** to `-1` (should subtract 1 day)

#### Edge Cases
- **Empty format**: Should use default format
- **Invalid timezone**: Should fallback gracefully
- **Large values**: Test with years=100, days=365

### Expected Results

#### Current DateTime
```
{{ datetimeFormatter }}
```
Expected: `2025-01-15 14:30:45`

#### Add Time
```
{{ datetimeFormatter(0, 0, 1, 2, 30, 0) }}
```
Expected: `2025-01-16 16:31:45`

#### Custom Format
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "MMMM Do YYYY, h:mm:ss a") }}
```
Expected: `January 15th 2025, 2:30:45 pm`

#### Different Timezone
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "YYYY-MM-DD HH:mm:ss", "America/New_York") }}
```
Expected: `2025-01-15 09:30:45`

#### Format Unix timestamp (seconds)
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "YYYY-MM-DD HH:mm:ss", "UTC", 1700000000) }}
```

#### Format Unix timestamp (milliseconds)
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "YYYY-MM-DD HH:mm:ss", "UTC", 1700000000000) }}
```

#### Format ISO string input
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "YYYY-MM-DD HH:mm:ss", "Europe/London", "2024-01-01T00:00:00Z") }}
```

## Automated Testing

### Run Test Suite
```bash
npm test
```

### Test Coverage
```bash
npm run coverage
```

## Debugging

### Console Logs
- Open Chrome DevTools in Insomnia: `View > Toggle DevTools`
- Check Console tab for plugin errors
- Look for messages starting with `[DateTime Add Plugin]`

### Common Issues
1. **Plugin not loading**: Check plugins directory path
2. **Template tag not appearing**: Restart Insomnia completely
3. **Time zone errors**: Verify timezone name is valid (use Moment.js timezone names)
4. **Format errors**: Check Moment.js format documentation

### Debug Mode
Add this to the top of `main.js` for debugging:
```javascript
console.log('[DateTime Add Plugin] Loading...');
```

## Performance Testing

### Load Testing
- Test with multiple template tags in one request
- Monitor memory usage in DevTools
- Check response times

### Stress Testing
- Large date ranges (years=1000)
- Complex format strings
- Multiple timezone conversions

## Validation Checklist ✅

- [ ] Plugin loads without errors
- [ ] Template tag appears in list
- [ ] Default parameters work
- [ ] All parameters work individually
- [ ] Parameter combinations work
- [ ] Negative values work
- [ ] Custom formats work
- [ ] Timezones work
- [ ] Error handling works
- [ ] Performance is acceptable
