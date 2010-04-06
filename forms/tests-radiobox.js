function radioBoxTests()
{
	module("Radiobox tests");
	test("isRadioBox", function()
	{
		equals($("#_radio1_2").isRadioBox(),true);
	});
	test("isSelected", function()
	{
		equals($("#_radio1_2").isSelected("2"),false);
		equals($("#_radio1_5").isSelected("3"),true);
	});
	test("selectedValue", function()
	{
		equals($("#_radio1_2").selectedValue("3"),"3");
	});
	test("selectedValues", function()
	{
		var vals = $("#_radio1_2").selectedValues();
		equals(vals.length,1);
		equals(vals[0],"3");
	});
	test("selectedItem(1)", function()
	{
		equals($("#_radio1_2").selectedItem(0).val(),"3");
	});
	
	test("firstSelectedItem", function()
	{
		equals($("#_radio1_2").firstSelectedItem().val(),"3");
	});
	
	test("lastSelectedItem", function()
	{
		equals($("#_radio1_2").lastSelectedItem().val(),"3");
	});
	
	test("itemExists", function()
	{
		equals($("#_radio1_2").itemExists("5"),true);
	});
}