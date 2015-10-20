#jQuery Extensions
jQuery extensions is a set of functions added to the jQuery object for common Javascript tasks and form tasks.

###Download
The downloads comes as either the minified script, or a full zip with the tests (and example usage) and un-minified source. The un-minified source contains Javascript documentation and Visual Studio friendly documentation too.

#Nuget
You can install the two plugin files via nuget. By default it installs these into the Scripts folder, and will give you both the minified and documented versions of the files.

	pm> Install-Package jQueryExtensions

###Examples

	$.isNumber(42);
	
	var x;
	$.isUndefined(x);
	$.isNullOrUndefined(x);
	$.isString(false);
	
	$.emptyString("the quick brown fox");
	$.startsWith("the quick brown fox","the");
	$.formatString("Here is the {0} and {2}","first","second");

###Documentation
Full intellisense documentation is available with the full download (the unminified versions of the JS files). These come with the Nuget package.

 * isNumber(object)
 * isBoolean(object)
 * isNull(object)
 * isUndefined(object)
 * isNullOrUndefined(object)
 * isString(object)
 * isArray(object)
 * emptyString(string)
 * startsWith(string)
 * endsWith(string)
 * formatString(format,args)
 * log(format,args)

#jQuery Form Extensions
Jquery Form Extensions is a small plugin to assist with common form-related tasks in jQuery.

It doesn't provide automated form validation, form to JSON or anything similar. It's a set of methods for common form tasks. Most of these are easily achieved with jQuery, this plugin aims to give [http://en.wikipedia.org/wiki/Fluent_interface a more fluent API] which in the process helps to make the code more readable, testable and concise.

Coming from a .NET background, the naming of the functions is geared towards the ASP.NET controls, however it should be intuitive to most frameworks.

###Download
The downloads comes as either the minified script, or a full zip with the tests (and example usage) and un-minified source. The un-minified source contains Javascript documentation and Visual Studio friendly documentation too.

###Example

	// elementExists is also added
	if ($("#someid").elementExists())
	  alert("found it");
		
	// Select box related
	$("#mydropdown").isDropDownList();
	
	// Can be any of the items from a list of radio boxes - it will use the name
	$("#randomradioboxitem").isRadioBox("myvalue");
	$("#radioboxitem").isSelected("myvalue");
	
	// The value of the item selected. For multiple selects it's the first value
	$("#radioboxitem").selectedValue();
	
	// Various, others include password, hidden. Buttons also
	$("#mytextbox").isTextBox();
	$("#mycheck").isCheckBox();
	$("#multi-select").isSelected("one", "two", "three");
	
	// Returns the 'type' property or 'select-one' 'select-multiple'
	var fieldType = $("#someid").formElementType();

###Documentation
The non-minified JS files have full intellisense documentation.

Functions added:
 * elementExists()  
 * formElementType() - returns a string
 * isTextBox()  
 * isTextArea()
 * isPassword()
 * isHiddenInput()
 * isCheckBox()
 * isRadioBox()
 * isButton()
 * isSubmitButton()
 * isResetButton()
 * isSelectBox()
 * isMultiSelectBox()
 * isDropDownList()
 * isChecked()
 * itemExists(item) - item is a string value to compare

###Select box (and radiobox) related
 * isSelected(val) - val is a string value to compare
 * selectedItem() - returns a jQuery object
 * firstSelectedItem() - returns a jQuery object
 * lastSelectedItem() - returns a jQuery object
 * selectedValue() - returns a string
 * selectedValues() - returns an array of strings
 * selectByIndex(index) - selects an item in a drop down by its index
 * selectByValue(value) - selects an item in a drop down by its value

The textbox and button functions don't necessarily add much value to the plugin, but are there for completeness.

###Contributing
Recommendations for improvements to the source or new functions are welcome, or contributing as a member. Some features that would be nice to add would be add/removal functions for select boxes.
