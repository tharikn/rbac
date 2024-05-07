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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbG9naW4vc3JjL2xpYi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUVIOzs7R0FHRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBTVg7QUFORCxXQUFZLFFBQVE7SUFDbEIscUNBQU8sQ0FBQTtJQUNQLHlDQUFLLENBQUE7SUFDTCw2Q0FBTyxDQUFBO0lBQ1AsdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7QUFDUCxDQUFDLEVBTlcsUUFBUSxLQUFSLFFBQVEsUUFNbkI7QUFPRCxNQUFNLE9BQU8sTUFBTTtJQW9CakIsWUFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBRyxDQUFDO0lBUnZDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxvQkFBb0I7UUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFJRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsR0FBRyxPQUFjO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLENBQUMsR0FBRyxPQUFjO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLENBQUMsR0FBRyxPQUFjO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsR0FBRyxPQUFjO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxHQUFHLENBQUMsSUFBOEIsRUFBRSxLQUFlLEVBQUUsT0FBYztRQUN6RSxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQzs7QUEzREQ7OztHQUdHO0FBQ0ksWUFBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFFOUI7O0dBRUc7QUFDSSxjQUFPLEdBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTaW1wbGUgbG9nZ2VyIHN5c3RlbSB3aXRoIHRoZSBwb3NzaWJpbGl0eSBvZiByZWdpc3RlcmluZyBjdXN0b20gb3V0cHV0cy5cclxuICpcclxuICogNCBkaWZmZXJlbnQgbG9nIGxldmVscyBhcmUgcHJvdmlkZWQsIHdpdGggY29ycmVzcG9uZGluZyBtZXRob2RzOlxyXG4gKiAtIGRlYnVnICAgOiBmb3IgZGVidWcgaW5mb3JtYXRpb25cclxuICogLSBpbmZvICAgIDogZm9yIGluZm9ybWF0aXZlIHN0YXR1cyBvZiB0aGUgYXBwbGljYXRpb24gKHN1Y2Nlc3MsIC4uLilcclxuICogLSB3YXJuaW5nIDogZm9yIG5vbi1jcml0aWNhbCBlcnJvcnMgdGhhdCBkbyBub3QgcHJldmVudCBub3JtYWwgYXBwbGljYXRpb24gYmVoYXZpb3JcclxuICogLSBlcnJvciAgIDogZm9yIGNyaXRpY2FsIGVycm9ycyB0aGF0IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXHJcbiAqXHJcbiAqIEV4YW1wbGUgdXNhZ2U6XHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdhcHAvY29yZS9sb2dnZXIuc2VydmljZSc7XHJcbiAqXHJcbiAqIGNvbnN0IGxvZyA9IG5ldyBMb2dnZXIoJ215RmlsZScpO1xyXG4gKiAuLi5cclxuICogbG9nLmRlYnVnKCdzb21ldGhpbmcgaGFwcGVuZWQnKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRvIGRpc2FibGUgZGVidWcgYW5kIGluZm8gbG9ncyBpbiBwcm9kdWN0aW9uLCBhZGQgdGhpcyBzbmlwcGV0IHRvIHlvdXIgcm9vdCBjb21wb25lbnQ6XHJcbiAqIGBgYFxyXG4gKiBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICogICBuZ09uSW5pdCgpIHtcclxuICogICAgIGlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XHJcbiAqICAgICAgIExvZ2dlci5lbmFibGVQcm9kdWN0aW9uTW9kZSgpO1xyXG4gKiAgICAgfVxyXG4gKiAgICAgLi4uXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIElmIHlvdSB3YW50IHRvIHByb2Nlc3MgbG9ncyB0aHJvdWdoIG90aGVyIG91dHB1dHMgdGhhbiBjb25zb2xlLCB5b3UgY2FuIGFkZCBMb2dPdXRwdXQgZnVuY3Rpb25zIHRvIExvZ2dlci5vdXRwdXRzLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgcG9zc2libGUgbG9nIGxldmVscy5cclxuICogTG9nTGV2ZWwuT2ZmIGlzIG5ldmVyIGVtaXR0ZWQgYW5kIG9ubHkgdXNlZCB3aXRoIExvZ2dlci5sZXZlbCBwcm9wZXJ0eSB0byBkaXNhYmxlIGxvZ3MuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgT2ZmID0gMCxcclxuICBFcnJvcixcclxuICBXYXJuaW5nLFxyXG4gIEluZm8sXHJcbiAgRGVidWdcclxufVxyXG5cclxuLyoqXHJcbiAqIExvZyBvdXRwdXQgaGFuZGxlciBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExvZ091dHB1dCA9IChzb3VyY2U6IHN0cmluZyB8IHVuZGVmaW5lZCwgbGV2ZWw6IExvZ0xldmVsLCAuLi5vYmplY3RzOiBhbnlbXSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgbG9nZ2luZyBsZXZlbC5cclxuICAgKiBTZXQgaXQgdG8gTG9nTGV2ZWwuT2ZmIHRvIGRpc2FibGUgbG9ncyBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBsZXZlbCA9IExvZ0xldmVsLkRlYnVnO1xyXG5cclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGxvZyBvdXRwdXRzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBvdXRwdXRzOiBMb2dPdXRwdXRbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBFbmFibGVzIHByb2R1Y3Rpb24gbW9kZS5cclxuICAgKiBTZXRzIGxvZ2dpbmcgbGV2ZWwgdG8gTG9nTGV2ZWwuV2FybmluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZW5hYmxlUHJvZHVjdGlvbk1vZGUoKSB7XHJcbiAgICBMb2dnZXIubGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2U/OiBzdHJpbmcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgZGVidWcgbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBkZWJ1ZyguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5sb2csIExvZ0xldmVsLkRlYnVnLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgaW5mbyBsZXZlbC5cclxuICAgKiBXb3JrcyB0aGUgc2FtZSBhcyBjb25zb2xlLmxvZygpLlxyXG4gICAqL1xyXG4gIGluZm8oLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUuaW5mbywgTG9nTGV2ZWwuSW5mbywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIHdhcm5pbmcgbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICB3YXJuKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLndhcm4sIExvZ0xldmVsLldhcm5pbmcsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSBlcnJvciBsZXZlbC5cclxuICAgKiBXb3JrcyB0aGUgc2FtZSBhcyBjb25zb2xlLmxvZygpLlxyXG4gICAqL1xyXG4gIGVycm9yKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmVycm9yLCBMb2dMZXZlbC5FcnJvciwgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvZyhmdW5jOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIGxldmVsOiBMb2dMZXZlbCwgb2JqZWN0czogYW55W10pIHtcclxuICAgIGlmIChsZXZlbCA8PSBMb2dnZXIubGV2ZWwpIHtcclxuICAgICAgY29uc3QgbG9nID0gdGhpcy5zb3VyY2UgPyBbJ1snICsgdGhpcy5zb3VyY2UgKyAnXSddLmNvbmNhdChvYmplY3RzKSA6IG9iamVjdHM7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29uc29sZSwgbG9nKTtcclxuICAgICAgTG9nZ2VyLm91dHB1dHMuZm9yRWFjaChvdXRwdXQgPT4gb3V0cHV0LmFwcGx5KG91dHB1dCwgW3RoaXMuc291cmNlLCBsZXZlbCwgLi4ub2JqZWN0c10pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19