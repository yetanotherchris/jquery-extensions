function checkBoxTests()
{
	module("Checkbox tests");
	test("isCheckBox", function()
	{
		equals($("#_checkbox1").isCheckBox(),true);
	});
	test("isChecked", function()
	{
		equals($("#_checkbox1").isChecked(),false);
		equals($("#_checkbox2").isChecked(),true);
	});
	test("selectedValue", function()
	{
		equals($("#_checkbox1").selectedValue("1"),"1");
	});
	test("selectedValues", function()
	{
		var vals = $("#_checkbox1").selectedValues();
		equals(vals.length,1);
		equals(vals[0],"1");
	});
	test("selectedItem(1)", function()
	{
		equals($("#_checkbox1").selectedItem(0).val(),"1");
	});
	
	test("firstSelectedItem", function()
	{
		equals($("#_checkbox1").firstSelectedItem().val(),"1");
	});
	
	test("lastSelectedItem", function()
	{
		equals($("#_checkbox1").lastSelectedItem().val(),"1");
	});
	
	test("itemExists", function()
	{
		equals($("#_checkbox1").itemExists("1"),true);
	});
}