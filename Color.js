function Color(red, green, blue)
{
    var current = [red, green, blue];

    this.getCurrent = function ()
    {
        return current;
    }
}

function inHerited(xvalue)
{
    var x = xvalue
}

// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = Color;
}