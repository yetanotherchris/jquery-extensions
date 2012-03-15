function dropDownTests()
{
	module("Drop down list (combo box)");
	
	test("isDropDownList", function()
	{
		equals($("#_dropdownlist").isDropDownList(),true);
	});
	
	test("isSelectBox", function()
	{
		equals($("#_dropdownlist").isSelectBox(),false);
	});
	
	test("isMultiSelectBox", function()
	{
		equals($("#_dropdownlist").isMultiSelectBox(),false);
	});
	
	test("isSelected", function()
	{
		equals($("#_dropdownlist").isSelected("bmw"),false);
	});
	
	test("selectedValue", function()
	{
		var val = $("#_dropdownlist").selectedValue();
		equals(val,"ford");
	});
	
	test("selectedValues", function()
	{
		var vals = $("#_dropdownlist").selectedValues();
		equals(vals.length,1);
		equals(vals[0],"ford");
	});
	
	test("selectedItem(0)", function()
	{
		equals($("#_dropdownlist").selectedItem(0).val(),"ford");
	});
	
	test("firstSelectedItem", function()
	{
		equals($("#_dropdownlist").firstSelectedItem().val(),"ford");
	});
	
	test("lastSelectedItem", function()
	{
		equals($("#_dropdownlist").lastSelectedItem().val(),"ford");
	});
	
	test("itemExists", function()
	{
		equals($("#_dropdownlist").itemExists("IBM"),true);
	});
	
	test("selectByIndex", function()
	{
		$("#_dropdownlist").selectByIndex(1);
		var vals = $("#_dropdownlist").selectedValues();
		equals(vals.length,1);
		equals(vals[0],"toyota");
	});
	
	test("selectByValue", function()
	{
		$("#_dropdownlist").selectByValue("IBM");
		var vals = $("#_dropdownlist").selectedValues();
		equals(vals.length,1);
		equals(vals[0],"IBM");
	});
}