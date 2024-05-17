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
    source;
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    static level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    static outputs = [];
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    constructor(source) {
        this.source = source;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbG9naW4vc3JjL2xpYi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUVIOzs7R0FHRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBTVg7QUFORCxXQUFZLFFBQVE7SUFDbEIscUNBQU8sQ0FBQTtJQUNQLHlDQUFLLENBQUE7SUFDTCw2Q0FBTyxDQUFBO0lBQ1AsdUNBQUksQ0FBQTtJQUNKLHlDQUFLLENBQUE7QUFDUCxDQUFDLEVBTlcsUUFBUSxLQUFSLFFBQVEsUUFNbkI7QUFPRCxNQUFNLE9BQU8sTUFBTTtJQW9CRztJQW5CcEI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBRTlCOztPQUVHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBZ0IsRUFBRSxDQUFDO0lBRWpDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxvQkFBb0I7UUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUFHLENBQUM7SUFFdkM7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsT0FBYztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLEdBQUcsT0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLEdBQUcsT0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsT0FBYztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sR0FBRyxDQUFDLElBQThCLEVBQUUsS0FBZSxFQUFFLE9BQWM7UUFDekUsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRjtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogU2ltcGxlIGxvZ2dlciBzeXN0ZW0gd2l0aCB0aGUgcG9zc2liaWxpdHkgb2YgcmVnaXN0ZXJpbmcgY3VzdG9tIG91dHB1dHMuXHJcbiAqXHJcbiAqIDQgZGlmZmVyZW50IGxvZyBsZXZlbHMgYXJlIHByb3ZpZGVkLCB3aXRoIGNvcnJlc3BvbmRpbmcgbWV0aG9kczpcclxuICogLSBkZWJ1ZyAgIDogZm9yIGRlYnVnIGluZm9ybWF0aW9uXHJcbiAqIC0gaW5mbyAgICA6IGZvciBpbmZvcm1hdGl2ZSBzdGF0dXMgb2YgdGhlIGFwcGxpY2F0aW9uIChzdWNjZXNzLCAuLi4pXHJcbiAqIC0gd2FybmluZyA6IGZvciBub24tY3JpdGljYWwgZXJyb3JzIHRoYXQgZG8gbm90IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXHJcbiAqIC0gZXJyb3IgICA6IGZvciBjcml0aWNhbCBlcnJvcnMgdGhhdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzYWdlOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnYXBwL2NvcmUvbG9nZ2VyLnNlcnZpY2UnO1xyXG4gKlxyXG4gKiBjb25zdCBsb2cgPSBuZXcgTG9nZ2VyKCdteUZpbGUnKTtcclxuICogLi4uXHJcbiAqIGxvZy5kZWJ1Zygnc29tZXRoaW5nIGhhcHBlbmVkJyk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUbyBkaXNhYmxlIGRlYnVnIGFuZCBpbmZvIGxvZ3MgaW4gcHJvZHVjdGlvbiwgYWRkIHRoaXMgc25pcHBldCB0byB5b3VyIHJvb3QgY29tcG9uZW50OlxyXG4gKiBgYGBcclxuICogZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAqICAgbmdPbkluaXQoKSB7XHJcbiAqICAgICBpZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gKiAgICAgICBMb2dnZXIuZW5hYmxlUHJvZHVjdGlvbk1vZGUoKTtcclxuICogICAgIH1cclxuICogICAgIC4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBJZiB5b3Ugd2FudCB0byBwcm9jZXNzIGxvZ3MgdGhyb3VnaCBvdGhlciBvdXRwdXRzIHRoYW4gY29uc29sZSwgeW91IGNhbiBhZGQgTG9nT3V0cHV0IGZ1bmN0aW9ucyB0byBMb2dnZXIub3V0cHV0cy5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIHBvc3NpYmxlIGxvZyBsZXZlbHMuXHJcbiAqIExvZ0xldmVsLk9mZiBpcyBuZXZlciBlbWl0dGVkIGFuZCBvbmx5IHVzZWQgd2l0aCBMb2dnZXIubGV2ZWwgcHJvcGVydHkgdG8gZGlzYWJsZSBsb2dzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIE9mZiA9IDAsXHJcbiAgRXJyb3IsXHJcbiAgV2FybmluZyxcclxuICBJbmZvLFxyXG4gIERlYnVnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2cgb3V0cHV0IGhhbmRsZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMb2dPdXRwdXQgPSAoc291cmNlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGxldmVsOiBMb2dMZXZlbCwgLi4ub2JqZWN0czogYW55W10pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuICAvKipcclxuICAgKiBDdXJyZW50IGxvZ2dpbmcgbGV2ZWwuXHJcbiAgICogU2V0IGl0IHRvIExvZ0xldmVsLk9mZiB0byBkaXNhYmxlIGxvZ3MgY29tcGxldGVseS5cclxuICAgKi9cclxuICBzdGF0aWMgbGV2ZWwgPSBMb2dMZXZlbC5EZWJ1ZztcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBsb2cgb3V0cHV0cy5cclxuICAgKi9cclxuICBzdGF0aWMgb3V0cHV0czogTG9nT3V0cHV0W10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyBwcm9kdWN0aW9uIG1vZGUuXHJcbiAgICogU2V0cyBsb2dnaW5nIGxldmVsIHRvIExvZ0xldmVsLldhcm5pbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGVuYWJsZVByb2R1Y3Rpb25Nb2RlKCkge1xyXG4gICAgTG9nZ2VyLmxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlPzogc3RyaW5nKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGRlYnVnIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgZGVidWcoLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUubG9nLCBMb2dMZXZlbC5EZWJ1Zywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGluZm8gbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBpbmZvKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmluZm8sIExvZ0xldmVsLkluZm8sIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSB3YXJuaW5nIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgd2FybiguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS53YXJuLCBMb2dMZXZlbC5XYXJuaW5nLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgZXJyb3IgbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBlcnJvciguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5lcnJvciwgTG9nTGV2ZWwuRXJyb3IsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2coZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCBsZXZlbDogTG9nTGV2ZWwsIG9iamVjdHM6IGFueVtdKSB7XHJcbiAgICBpZiAobGV2ZWwgPD0gTG9nZ2VyLmxldmVsKSB7XHJcbiAgICAgIGNvbnN0IGxvZyA9IHRoaXMuc291cmNlID8gWydbJyArIHRoaXMuc291cmNlICsgJ10nXS5jb25jYXQob2JqZWN0cykgOiBvYmplY3RzO1xyXG4gICAgICBmdW5jLmFwcGx5KGNvbnNvbGUsIGxvZyk7XHJcbiAgICAgIExvZ2dlci5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IG91dHB1dC5hcHBseShvdXRwdXQsIFt0aGlzLnNvdXJjZSwgbGV2ZWwsIC4uLm9iamVjdHNdKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==