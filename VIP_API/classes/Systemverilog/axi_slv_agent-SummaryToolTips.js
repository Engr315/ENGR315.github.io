NDSummary.OnToolTipsLoaded("SystemverilogClass:axi_slv_agent",{1072:"<div class=\"NDToolTip TClass LSystemverilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1072\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">axi_slv_agent</div></div></div><div class=\"TTSummary\">AXI Slave Agent Class. This class contains other components that comprise the entire Slave Verification component.&nbsp; These are the Monitor, Read Driver and Write Driver.Refer PG267 section about AXI Slave Agent for more details.</div></div>",1074:"<div class=\"NDToolTip TInformation LSystemverilog\"><div class=\"TTSummary\">axi_monitor&nbsp; `AXI_PARAM_ORDER monitor;</div></div>",1076:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1076\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function new</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">name&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;unnamed_axi_slv_agent&quot;</span>,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">virtual interface</span> axi_vip_if `</td><td class=\"PType\">AXI_PARAM_ORDER&nbsp;</td><td class=\"PName\">vif</td><td></td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create an AXI Slave Agent. ~name~ is the instance name and axi_vip_if is the interface in the design.&nbsp; Please see PG267 for how to find the interface in design hierarchy.</div></div>",1077:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1077\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual function void</span> set_verbosity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">xil_verbosity&nbsp;</td><td class=\"PName last\">updated</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the verbosity of the axi_slv_agent and all sub classes. ~name~ is the instance name.</div></div>",1078:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1078\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual function void</span> set_agent_tag(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">updated</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the tag of the axi_slv_agent and all sub classes.</div></div>",1079:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1079\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_vif(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">axi_vif_mem_proxy `</td><td class=\"PType\">AXI_PARAM_ORDER&nbsp;</td><td class=\"PName last\">vif</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Agent\'s virtual interface. This is the interface that will be monitored and/or driven.</div></div>",1080:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1080\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_wr_transaction_depth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_uint&nbsp;</td><td class=\"PName last\">update</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of WRITE transactions that the axi_slv_agent will have in flight at one time.</div></div>",1081:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1081\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> xil_axi_uint get_wr_transaction_depth()</div><div class=\"TTSummary\">Returns the maximum number of WRITE transactions that the axi_slv_agent will have in flight at one time.</div></div>",1082:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1082\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_rd_transaction_depth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_uint&nbsp;</td><td class=\"PName last\">update</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of READ transactions that the axi_slv_agent will have in flight at one time.</div></div>",1083:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1083\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> xil_axi_uint get_rd_transaction_depth()</div><div class=\"TTSummary\">Returns the maximum number of READ transactions that the axi_slv_agent will have in flight at one time.</div></div>",1084:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1084\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> enable_transaction_depth_checks()</div><div class=\"TTSummary\">Turn on current agent\'s transaction depth check and its monitor\'s enable_transaction_depth_checks</div></div>",1085:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1085\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> disable_transaction_depth_checks()</div><div class=\"TTSummary\">Turn off current agent\'s transaction depth check and its monitor\'s enable_transaction_depth_checks</div></div>",1086:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1086\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task start_monitor()</div><div class=\"TTSummary\">Enables the monitor in this agent to start collecting data.</div></div>",1087:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1087\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task start_slave()</div><div class=\"TTSummary\">Enables the READ and WRITE drivers in this agent to start collecting data.&nbsp; The drivers will only issue transactions when the send functions are called.</div></div>",1088:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1088\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task stop_slave()</div><div class=\"TTSummary\">Disables the READ and WRITE drivers of the slave. Once disabled, no further action will occur by the drivers.</div></div>",1089:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1089\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task stop_monitor()</div><div class=\"TTSummary\">Disables the monitor in this agent from start collecting data. . Once disabled, no further action will occur by the monitor.</div></div>",1090:"<div class=\"NDToolTip TFunction LSystemverilog\"><div id=\"NDPrototype1090\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task set_nobackpressure_readies()</div><div class=\"TTSummary\">Convenience function to set the ARREADY/WREADY/AWREADY of the slave to not apply any backpressure to the simulation.</div></div>"});