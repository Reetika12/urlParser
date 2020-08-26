export function ParseParamsURL(parser = {}) //  function that will return object with relevent information
{
    console.log("parser", parser)
    var objectParams = {}
    var aray
    if (parser.href.indexOf(":") > 0) {
        var aray_new = parser.href.substring(parser.href.indexOf(':') + 1)
        aray = parser.href.split(':')
        if (parser.href.indexOf("//") >= 0) {
            aray = []
            aray = parser.href.split('://')
        }
        if (aray.length > 2) {
            aray[1] = aray_new
        }
        objectParams.scheme = aray[0]
        // here insering the value if scheme is there
    }
    if (aray[1].indexOf(".") > 0) {
        if (aray[1].includes("/") || aray[1].includes(":")) {
            var aray1 = aray[1].split(':')
            objectParams.domain = aray1[0]
            aray = []
            aray = aray1
        }
        else {
            objectParams.domain = aray[1]
            aray = []
        }
        console.log("aray", aray)
        // here insering the value if domain is there
    }

    if (aray[1]) {
        if (aray[1].includes('/')) {
            var array = aray[1].substring(aray[1].indexOf('/') + 1)
            var aray4 = aray[1].split('/')
            objectParams.port = aray4[0]
            aray4[1] = array
            aray = []
            aray = aray4
        }
        else {
            objectParams.port = aray[1]
            aray = []
        }
    }
    if (aray[1]) {
        if (aray[1].includes('?')) {
            var array1 = aray[1].split('?')
            objectParams.path = array1[0]
            aray = []
            aray = array1
        }
        else {
            objectParams.path = aray[1]
            aray = []
        }
    }

    if (aray[1]) {
        if (aray[1].includes('#')) {
            var array2 = aray[1].split('#')
            objectParams.query = array2[0]
            aray = []
            aray = array2
        }
        else {
            objectParams.query = aray[1]
            aray = []
        }
    }

    if (aray[1]) {
        objectParams.fragment = aray[1]
    }
    if (parser.href.indexOf("[") > 0) {
        var arr = parser.href.indexOf("[")
        var arrnew = arr[1].split(']')
        var usernameAndpassword = arrnew[0].split(':')
        objectParams.username = usernameAndpassword[0] // insering the value if username is there
        objectParams.passWord = usernameAndpassword[1] // insering the value if password is there
    }
    return objectParams
}

