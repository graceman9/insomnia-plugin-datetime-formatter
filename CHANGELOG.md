# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2025-08-31

### Added
- Initial public release of DateTime Add template tag
- Full timezone handling via `moment-timezone`
- Flexible formatting with Moment.js format strings
- Support for adding/subtracting years, months, days, hours, minutes, seconds
- SVG icon, README, LICENSE

### Technical
- Dependencies: `moment-timezone` ^0.5.45
- Node.js 14+

## [2.0.0] - 2025-01-15

### Added
- **Advanced Timezone Support**: Full timezone handling with Moment.js timezone support
- **Flexible Formatting**: Support for any Moment.js format string
- **Negative Values**: Support for subtracting time units
- **Template Tag Integration**: Seamless integration with Insomnia's template system
- **Comprehensive Documentation**: Detailed README with examples and usage guide
- **Plugin Icon**: Professional SVG icon for better visual identification

### Changed
- **Enhanced User Experience**: Improved parameter descriptions and tooltips
- **Better Error Handling**: Robust error handling with meaningful messages
- **Code Structure**: More maintainable and well-documented code

### Technical Improvements
- **Dependencies**: Updated to latest Moment.js version (^2.29.4)
- **Node.js Support**: Compatible with Node.js 14+
- **Plugin Standards**: Follows latest Insomnia plugin development standards

## [1.0.0] - Initial Release
- Basic datetime addition functionality
- Support for years, months, days, hours, minutes, seconds
- Simple formatting options
- Basic plugin structure

---

## Development Notes

### Plugin Architecture
- Uses Moment.js for robust date/time manipulation
- Follows Insomnia plugin template tag pattern
- Includes comprehensive error handling
- Supports both positive and negative time adjustments

### Compatibility
- **Insomnia**: Latest versions
- **Node.js**: 14.0.0+
- **Moment.js**: ^2.29.4

### Future Enhancements (Roadmap)
- [ ] Custom timezone definitions
- [ ] Relative time calculations
- [ ] Business days calculations
- [ ] Holiday-aware date calculations
- [ ] Multiple locale support
