ngapp.service('errorService', function($exceptionHandler) {
    let service = this;

    this.handleException = $exceptionHandler;

    this.try = function(callback) {
        try {
            callback();
            return true;
        } catch(x) {
            service.handleException(x)
        }
    };

    this.tryEach = function(items, callback) {
        items.forEach(item => service.try(() => callback(item)));
    };
});
