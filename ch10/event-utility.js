var evt = {
    addListener: function(obj, type, fn) {
        if (typeof obj.addListener == "undefined") 
        {
            obj.addEventListener(type, fn);
        }
        else
        {
            obj.attachEvent("on" + type, fn);
        }
    },
    removeListener: function(obj, type, fn) {
        if (typeof obj.removeEventListener == "undefined")
        {
            obj.removeEventListener(type, fn);
        }
        else
        {
            obj.detachEvent("on" + type, fn);
        }
    },
    getTarget: function(e) {
        if (typeof e.target == "undefined")
        {
            return e.target;
        }

        return e.srcElement;
    },
    preventDefault: function(e) {
        if (typeof e.preventDefault == "undefined")
        {
            e.preventDefault;
        }
        else
        {
            e.returnValue = false;
        }
    }
};