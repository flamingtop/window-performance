A tiny bit of math applied to the window.performance object in chrome and firefox. 

&lt;script src="/page/to/wp.js"&gt;&lt;/script&gt;

    navigationStart               -> fetchStart                    :  124
    fetchStart                    -> domainLookupStart             :  0
    domainLookupStart             -> domainLookupEnd               :  0
    domainLookupEnd               -> connectStart                  :  0
    connectStart                  -> connectEnd                    :  0
    connectEnd                    -> requestStart                  :  3
    requestStart                  -> responseStart                 :  381
    responseStart                 -> domLoading                    :  17
    domLoading                    -> responseEnd                   :  751
    responseEnd                   -> domInteractive                :  22
    domInteractive                -> domContentLoadedEventStart    :  0
    domContentLoadedEventStart    -> domContentLoadedEventEnd      :  22
    domContentLoadedEventEnd      -> loadEventStart                :  444
    loadEventStart                -> domComplete                   :  0
    domComplete                   -> loadEventEnd                  :  3
    
.
