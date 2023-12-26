/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
export class Logger {
    constructor(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
        }
    }
}
/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvY29uZmlnLWxvZ2luLXNldHRpbmdzL3NyYy9saWIvQGNvcmUvc2VydmljZS9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBRUg7OztHQUdHO0FBQ0gsTUFBTSxDQUFOLElBQVksUUFNWDtBQU5ELFdBQVksUUFBUTtJQUNsQixxQ0FBTyxDQUFBO0lBQ1AseUNBQUssQ0FBQTtJQUNMLDZDQUFPLENBQUE7SUFDUCx1Q0FBSSxDQUFBO0lBQ0oseUNBQUssQ0FBQTtBQUNQLENBQUMsRUFOVyxRQUFRLEtBQVIsUUFBUSxRQU1uQjtBQU9ELE1BQU0sT0FBTyxNQUFNO0lBb0JqQixZQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUFHLENBQUM7SUFSdkM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLG9CQUFvQjtRQUN6QixNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUlEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxHQUFHLE9BQWM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksQ0FBQyxHQUFHLE9BQWM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksQ0FBQyxHQUFHLE9BQWM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxHQUFHLE9BQWM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLEdBQUcsQ0FBQyxJQUE4QixFQUFFLEtBQWUsRUFBRSxPQUFjO1FBQ3pFLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUM5RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDOztBQTNERDs7O0dBR0c7QUFDSSxZQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUU5Qjs7R0FFRztBQUNJLGNBQU8sR0FBZ0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNpbXBsZSBsb2dnZXIgc3lzdGVtIHdpdGggdGhlIHBvc3NpYmlsaXR5IG9mIHJlZ2lzdGVyaW5nIGN1c3RvbSBvdXRwdXRzLlxyXG4gKlxyXG4gKiA0IGRpZmZlcmVudCBsb2cgbGV2ZWxzIGFyZSBwcm92aWRlZCwgd2l0aCBjb3JyZXNwb25kaW5nIG1ldGhvZHM6XHJcbiAqIC0gZGVidWcgICA6IGZvciBkZWJ1ZyBpbmZvcm1hdGlvblxyXG4gKiAtIGluZm8gICAgOiBmb3IgaW5mb3JtYXRpdmUgc3RhdHVzIG9mIHRoZSBhcHBsaWNhdGlvbiAoc3VjY2VzcywgLi4uKVxyXG4gKiAtIHdhcm5pbmcgOiBmb3Igbm9uLWNyaXRpY2FsIGVycm9ycyB0aGF0IGRvIG5vdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxyXG4gKiAtIGVycm9yICAgOiBmb3IgY3JpdGljYWwgZXJyb3JzIHRoYXQgcHJldmVudCBub3JtYWwgYXBwbGljYXRpb24gYmVoYXZpb3JcclxuICpcclxuICogRXhhbXBsZSB1c2FnZTpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IExvZ2dlciB9IGZyb20gJ2FwcC9jb3JlL2xvZ2dlci5zZXJ2aWNlJztcclxuICpcclxuICogY29uc3QgbG9nID0gbmV3IExvZ2dlcignbXlGaWxlJyk7XHJcbiAqIC4uLlxyXG4gKiBsb2cuZGVidWcoJ3NvbWV0aGluZyBoYXBwZW5lZCcpO1xyXG4gKiBgYGBcclxuICpcclxuICogVG8gZGlzYWJsZSBkZWJ1ZyBhbmQgaW5mbyBsb2dzIGluIHByb2R1Y3Rpb24sIGFkZCB0aGlzIHNuaXBwZXQgdG8geW91ciByb290IGNvbXBvbmVudDpcclxuICogYGBgXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gKiAgIG5nT25Jbml0KCkge1xyXG4gKiAgICAgaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICogICAgICAgTG9nZ2VyLmVuYWJsZVByb2R1Y3Rpb25Nb2RlKCk7XHJcbiAqICAgICB9XHJcbiAqICAgICAuLi5cclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogSWYgeW91IHdhbnQgdG8gcHJvY2VzcyBsb2dzIHRocm91Z2ggb3RoZXIgb3V0cHV0cyB0aGFuIGNvbnNvbGUsIHlvdSBjYW4gYWRkIExvZ091dHB1dCBmdW5jdGlvbnMgdG8gTG9nZ2VyLm91dHB1dHMuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwb3NzaWJsZSBsb2cgbGV2ZWxzLlxyXG4gKiBMb2dMZXZlbC5PZmYgaXMgbmV2ZXIgZW1pdHRlZCBhbmQgb25seSB1c2VkIHdpdGggTG9nZ2VyLmxldmVsIHByb3BlcnR5IHRvIGRpc2FibGUgbG9ncy5cclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcclxuICBPZmYgPSAwLFxyXG4gIEVycm9yLFxyXG4gIFdhcm5pbmcsXHJcbiAgSW5mbyxcclxuICBEZWJ1Z1xyXG59XHJcblxyXG4vKipcclxuICogTG9nIG91dHB1dCBoYW5kbGVyIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTG9nT3V0cHV0ID0gKHNvdXJjZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBsZXZlbDogTG9nTGV2ZWwsIC4uLm9iamVjdHM6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBsb2dnaW5nIGxldmVsLlxyXG4gICAqIFNldCBpdCB0byBMb2dMZXZlbC5PZmYgdG8gZGlzYWJsZSBsb2dzIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgc3RhdGljIGxldmVsID0gTG9nTGV2ZWwuRGVidWc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgbG9nIG91dHB1dHMuXHJcbiAgICovXHJcbiAgc3RhdGljIG91dHB1dHM6IExvZ091dHB1dFtdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgcHJvZHVjdGlvbiBtb2RlLlxyXG4gICAqIFNldHMgbG9nZ2luZyBsZXZlbCB0byBMb2dMZXZlbC5XYXJuaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBlbmFibGVQcm9kdWN0aW9uTW9kZSgpIHtcclxuICAgIExvZ2dlci5sZXZlbCA9IExvZ0xldmVsLldhcm5pbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZT86IHN0cmluZykge31cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSBkZWJ1ZyBsZXZlbC5cclxuICAgKiBXb3JrcyB0aGUgc2FtZSBhcyBjb25zb2xlLmxvZygpLlxyXG4gICAqL1xyXG4gIGRlYnVnKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmxvZywgTG9nTGV2ZWwuRGVidWcsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSBpbmZvIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgaW5mbyguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5pbmZvLCBMb2dMZXZlbC5JbmZvLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgd2FybmluZyBsZXZlbC5cclxuICAgKiBXb3JrcyB0aGUgc2FtZSBhcyBjb25zb2xlLmxvZygpLlxyXG4gICAqL1xyXG4gIHdhcm4oLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUud2FybiwgTG9nTGV2ZWwuV2FybmluZywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGVycm9yIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgZXJyb3IoLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUuZXJyb3IsIExvZ0xldmVsLkVycm9yLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9nKGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgbGV2ZWw6IExvZ0xldmVsLCBvYmplY3RzOiBhbnlbXSkge1xyXG4gICAgaWYgKGxldmVsIDw9IExvZ2dlci5sZXZlbCkge1xyXG4gICAgICBjb25zdCBsb2cgPSB0aGlzLnNvdXJjZSA/IFsnWycgKyB0aGlzLnNvdXJjZSArICddJ10uY29uY2F0KG9iamVjdHMpIDogb2JqZWN0cztcclxuICAgICAgZnVuYy5hcHBseShjb25zb2xlLCBsb2cpO1xyXG4gICAgICBMb2dnZXIub3V0cHV0cy5mb3JFYWNoKG91dHB1dCA9PiBvdXRwdXQuYXBwbHkob3V0cHV0LCBbdGhpcy5zb3VyY2UsIGxldmVsLCAuLi5vYmplY3RzXSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=