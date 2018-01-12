/*
 * author : nitin tyagi
 * Email : nitin.1992tyagi@gmail.com
 * © realinit.com
 */

(function (jqs) {
        jqs.fn.closeIntent = function (options) {
            try {
                var opts = jqs.extend({}, jqs.fn.closeIntent.defaults, options);
                function init() {
                    jqs("html").on("mouseleave.body", function (e) {
                        if (e.clientY > opts.sensitivity) {
                            return;
                        }
                        if (opts.flag) {
                            return;
                        }
                    });
                }
                STO(function () {
                        init();
                   
                }, opts.time*1000);
            } catch (e) {
                debug.d("jqs.fn.closeIntent " + e);
            }
        };
        jqs.fn.closeIntent.defaults = {
            "sensitivity": 0,
            "flag": false,
            time:0,
            callback: function (e) {
                return e;
            }
        };
    })(jQuery);
    
    
    jQuery("body").closeIntent({
                                    "time":2,
                                    callback: function () {
                                        alert("Done")
                                    }
                                });
