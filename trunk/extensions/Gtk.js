(function()
 {
	 var pack = function(packing)
		 {
			 for ( var i in packing )
			 {
				 var entry = packing[i];
				 var expand = entry["expand"];
				 var padding = entry["padding"];
				 var fill = entry["fill"];
				 var child = entry["child"];
				 var position = entry["position"];

				 if (position == null)
					 position = Gtk.PackType.start;
				 
				 this.pack_start(child);
				 this.set_child_packing(child, 
						       expand,
						       fill, 
						       padding, position);
			 }
		 }
	 Seed.prototype(Gtk.VBox).pack = pack;
	 Seed.prototype(Gtk.HBox).pack = pack;
 }).apply();