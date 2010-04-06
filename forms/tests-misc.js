function miscTests()
{
	module("Textbox/buttons/hidden tests");
	test("elementExists", function()
	{
		equals($("#_textbox").elementExists(),true);
	});
	test("formElementType ", function()
	{
		equals($("#none-existent").formElementType(),"");
		
		// Testing all form types would be pointless as that is testing the jquery.attr() function.
		// Only test ones that could cause problems
		equals($("#_textbox").formElementType(),"text");
		equals($("#_textarea").formElementType(),"textarea");
		equals($("#_basic-select").formElementType(),"select-one");
		equals($("#_dropdownlist").formElementType(),"select-one");
		equals($("#_multiselect").formElementType(),"select-multiple");
	});
	test("isTextBox", function()
	{
		equals($("#_textbox").isTextBox(),true);
	});
	test("isTextArea", function()
	{
		equals($("#_textarea").isTextArea(),true);
	});
	test("isPassword", function()
	{
		equals($("#_password").isPassword(),true);
	});
	test("isHiddenInput", function()
	{
		equals($("#_hidden").isHiddenInput(),true);
	});
	test("isButton", function()
	{
		equals($("#_basicButton").isButton(),true);
	});
	test("isSubmitButton", function()
	{
		equals($("#_submitButton").isSubmitButton(),true);
	});
	test("isResetButton", function()
	{
		equals($("#_resetButton").isResetButton(),true);
	});
}
