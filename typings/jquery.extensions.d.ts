/*
 * jQuery Extensions 1.0
 * http://code.google.com/p/jquery-extensions/
 *
 * Copyright (c) 2015 C.Small
 *
 * Licensed under the MIT license.
 * Date: 21:31 20/05/2009
 */

interface JQueryStatic {
    /* Determines whether the object is a Javascript Number object (int or float)
        @param The object to compare.
    */
    isNumber(o: any): boolean;

    /* Determines whether the object is a Javascript boolean object. Only true and false will return true for this function.
        @param The object to compare.
    */
    isBoolean(o: any): boolean;

    /* Determines whether the object is null (declare variables with a value set to null). This will return false for undefined values.
        @param The object to compare.
    */
    isNull(o: any): boolean;

    /* Determines whether the object is undefined, that is no value has been set for it. This will return false for variables with null value.
        @param The object to compare.
    */
    isUndefined(o: any): boolean;

    /* Determines whether the object provided is null, or undefined.
        @param The object to compare.
    */
    isNullOrUndefined(o: any): boolean;

    /* Determines whether the object is a Javascript string object.
        @param The object to compare.
    */
    isString(o: any): boolean;

    /* Determines whether the object is a Javascript Array object (declared as [] or new Array()).
        @param The object to compare.
    */
    isArray(o: any): boolean;

    /* Determines whether the object is a Javascript string object, and is empty - that is zero length.
       Undefined and null objects return false.
        @param The string to compare.
    */
    emptyString(str: string): boolean;

    /* Determines whether a string starts with a particular other string.
        @param str The string to search.
        @param search The string to search for.
    */
    startsWith(str: string, search: string): boolean;

    /* Determines whether a string ends with a particular other string.
        @param str The string to search.
        @param search The string to search for.
    */
    endsWith(str: string, search: string): boolean;

    /* Determines whether a string ends with a particular other string.
        Example:
        jQuery.formatString("Hello {0} it's {1}, you owe me ${2}","bob","Tuesday",3.00);
    
        If no tokens are found, the format string is returned.
    
        @param args A list of objects to display. The first argument should be the format - using
        .NET syntax of {0}, {1} and so on for replacements. These tokens are then replaced with the
        arguments matching their number (and their toString() method is used to print out the value).
    */
    formatString(): string;

    /* Provides basic logging. The provided format string and arguments (see jQuery.formatString) are logged to the console, if supported
       (IE8 or Firefox 3.x support console logging)
       @param args A format string and then a list of objects to display. See jQuery.formatString for more information.
    */
    log();
}