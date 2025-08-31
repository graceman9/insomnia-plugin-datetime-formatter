# Insomnia Plugin: DateTime Formatter v0.0.1

[![npm version](https://badge.fury.io/js/insomnia-plugin-datetime-formatter.svg)](https://badge.fury.io/js/insomnia-plugin-datetime-formatter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An Insomnia plugin to format current date/time with optional offsets and timezone using Moment.js Timezone.

## 🚀 Features

- **Advanced Time Manipulation**: Add or subtract years, months, days, hours, minutes, and seconds
- **Flexible Formatting**: Use any Moment.js format string for output
- **Timezone Support**: Specify custom timezones for the output
- **Template Tag Integration**: Seamlessly integrate with Insomnia's template system
- **Negative Values**: Support for subtracting time units
- **Error Handling**: Robust error handling with meaningful messages

## 📦 Installation

### Option 1: Install from Insomnia Plugin Hub
1. Open Insomnia
2. Go to **Preferences** → **Plugins**
3. Search for `datetime-formatter`
4. Click **Install**

### Option 2: Manual Installation
1. Download or clone this repository
2. Copy the plugin folder to your Insomnia plugins directory:
   - **macOS**: `~/Library/Application Support/Insomnia/plugins/`
   - **Windows**: `%APPDATA%\Insomnia\plugins\`
   - **Linux**: `~/.config/Insomnia/plugins/`
3. Restart Insomnia

### Option 3: Install via NPM (for development)
```bash
npm install insomnia-plugin-datetime-formatter
```

## 🔧 Usage

### Basic Usage

1. In any field that supports template tags (URL, headers, body, etc.), type `{{`
2. Select `DateTime Formatter` from the template tag list
3. Configure the parameters as needed

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Years** | Number | 0 | Number of years to add/subtract |
| **Months** | Number | 0 | Number of months to add/subtract |
| **Days** | Number | 0 | Number of days to add/subtract |
| **Hours** | Number | 0 | Number of hours to add/subtract |
| **Minutes** | Number | 0 | Number of minutes to add/subtract |
| **Seconds** | Number | 0 | Number of seconds to add/subtract |
| **Format** | String | `YYYY-MM-DD HH:mm:ss` | Moment.js format string |
| **Timezone** | String | `UTC` | Timezone for output |

### Examples

#### Current DateTime (Default)
```
{{ datetimeFormatter }}
```
Output: `2025-01-15 14:30:45`

#### Add 1 Day
```
{{ datetimeFormatter(0, 0, 1) }}
```
Output: `2025-01-16 14:30:45`

#### Subtract 2 Hours
```
{{ datetimeFormatter(0, 0, 0, -2) }}
```
Output: `2025-01-15 12:30:45`

#### Custom Format
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "MMMM Do YYYY, h:mm:ss a") }}
```
Output: `January 15th 2025, 2:30:45 pm`

#### Different Timezone
```
{{ datetimeFormatter(0, 0, 0, 0, 0, 0, "YYYY-MM-DD HH:mm:ss", "America/New_York") }}
```
Output: `2025-01-15 09:30:45`

#### Complex Example: Next Week ISO Format
```
{{ datetimeFormatter(0, 0, 7, 0, 0, 0, "YYYY-MM-DDTHH:mm:ssZ") }}
```
Output: `2025-01-22T14:30:45+00:00`

## 📋 Moment.js Format Reference

| Format | Output | Description |
|--------|--------|-------------|
| `YYYY` | 2025 | 4-digit year |
| `YY` | 25 | 2-digit year |
| `MMMM` | January | Full month name |
| `MMM` | Jan | Short month name |
| `MM` | 01 | 2-digit month |
| `DD` | 15 | 2-digit day |
| `dddd` | Monday | Full weekday name |
| `ddd` | Mon | Short weekday name |
| `HH` | 14 | 24-hour format |
| `hh` | 02 | 12-hour format |
| `mm` | 30 | Minutes |
| `ss` | 45 | Seconds |
| `A` | PM | AM/PM |
| `Z` | +00:00 | Timezone offset |

For complete format options, see: [Moment.js Documentation](https://momentjs.com/docs/#/displaying/format/)

## 🛠️ Development

### Prerequisites
- Node.js 14+
- Insomnia (for testing)

### Setup
```bash
git clone https://github.com/graceman9/insomnia-plugin-datetime-formatter.git
cd insomnia-plugin-datetime-formatter
npm install
```

### Testing
1. Copy the plugin to your Insomnia plugins directory
2. Restart Insomnia
3. Create a new request and test the template tag

### Publishing to NPM
```bash
npm login
npm publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Based on the original [insomnia-plugin-datetimeaddition](https://github.com/DimNS/DateTimeAdd) by DimNS
- Uses [Moment.js](https://momentjs.com) for datetime manipulation
- Inspired by the Insomnia plugin ecosystem

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/graceman9/insomnia-plugin-datetime-formatter/issues)
- **Discussions**: [GitHub Discussions](https://github.com/graceman9/insomnia-plugin-datetime-formatter/discussions)
- **Insomnia Plugin Hub**: [Plugin Page](https://insomnia.rest/plugins/insomnia-plugin-datetime-formatter)

---

**Made with ❤️ for the Insomnia community**
