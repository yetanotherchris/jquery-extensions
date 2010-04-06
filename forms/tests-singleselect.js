function singleSelectTests()
{
	module("Single select box");
	
	test("isDropDownList", function()
	{
		equals($("#_basic-select").isDropDownList(),false);
	});
	
	test("isSelectBox", function()
	{
		equals($("#_basic-select").isSelectBox(),true);
	});
	
	test("isMultiSelectBox", function()
	{
		equals($("#_basic-select").isMultiSelectBox(),false);
	});
	
	test("isSelected", function()
	{
		equals($("#_basic-select").isSelected("Bran"),false);
	});
	
	test("selectedValue", function()
	{
		var val = $("#_basic-select").selectedValue();
		equals(val,"carrot");
	});
	
	test("selectedValues", function()
	{
		var vals = $("#_basic-select").selectedValues();
		equals(vals.length,1);
		equals(vals[0],"carrot");
	});
	
	test("selectedItem(0)", function()
	{
		equals($("#_basic-select").selectedItem(0).val(),"carrot");
	});
	
	test("firstSelectedItem", function()
	{
		equals($("#_basic-select").firstSelectedItem().val(),"carrot");
	});
	
	test("lastSelectedItem", function()
	{
		equals($("#_basic-select").lastSelectedItem().val(),"carrot");
	});
	
	test("itemExists", function()
	{
		equals($("#_basic-select").itemExists("lettuce"),true);
	});
}