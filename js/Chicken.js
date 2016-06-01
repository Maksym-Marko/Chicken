;( function( $ ){
	
	function ConsLog( g ){
		
		console.log( g );
		
	}
	
	$.fn.Chicken = function( options ){
		
		var
			settings = $.extend( {
				
				// size
				'ChickFirstSize' : 40,
				
				// growth
				'TeenagerChiken' : 60,
				'Adult' : 100
				
			}, options ),			
			
			_this = this,
			
			/*
			*
			*	create chicken
			*
			*/				

			SeedCount = 0, // eatings seed
			
			PosX = 400, //Math.floor( ( Math.random() * 900 ) + 0 ),
			
			PosY = 300 //Math.floor( ( Math.random() * 400 ) + 0 ),
			
			CreateChicken = _this.css( {
				
				'width': settings.ChickFirstSize + 'px',
				'height': settings.ChickFirstSize + 'px',
				'left': PosX + 'px',
				'top': PosY + 'px' 				
				
			} ),
			
			/*
			*
			*	create fly auto
			*
			*/			
			CreateFly = setInterval( function(){
				
				var
					PosFlyX = Math.floor( ( Math.random() * 900 ) + 0 ),
			
					PosFlyY = Math.floor( ( Math.random() * 400 ) + 0 );
					
				$( "<span class='fly'></span>" ).appendTo( '.coop' ).css( {
					
					'left': PosFlyX + 'px',
					'top': PosFlyY + 'px'
					
				} );
				
				_this.animate( {
					
					'left': PosFlyX + 'px',
					'top': PosFlyY + 'px'
					
				},1500 );
				
				setTimeout( function(){
					
					$( '.fly' ).remove();
					
				}, 1200 );
				
				SeedCount++;
				
				// growth
				if( SeedCount > 5 && SeedCount < 10 ){ 
					
					_this.animate( {
					
						'width': settings.TeenagerChiken + 'px',
						'height': settings.TeenagerChiken + 'px',
						
					},1000 );
				
				} 
				if( SeedCount > 10 && SeedCount < 15 ){
					
					_this.animate( {
					
						'width': settings.Adult + 'px',
						'height': settings.Adult + 'px',
						
					},1000 );
				
				}	
				if( SeedCount > 15 ){
					
					_this.animate( {
						
						'left': PosX + 'px',
						'top': PosY + 'px' 	
						
					}, 3000 );
					
					setTimeout( function(){
						
						$( '.egg' ).css( {
							
							'display': 'block',
							'left': PosX  + 'px',
							'top': PosY + 'px' 	
							
						} );
						
					}, 3500 );						
					
					setTimeout( function(){
						
						_this.animate( {
							
							'left': '-900px',
							'top': '20px'
							
						}, 5000 );		
						
					},20000 );
					
					setTimeout( function(){
						
						window.location.reload();					
						
					},28000 );
					
					clearInterval( CreateFly );
					
				}
				
			}, 5000 ),
			
			/*
			*
			*	create seed a click on
			*
			*/		
			CreateSeed = $( document ).on( 'click', function( e ){
				
				if( SeedCount > 15 ){
					
					_this.animate( {
						
						'left': PosX + 'px',
						'top': PosY + 'px' 	
						
					}, 3000 );
					
					setTimeout( function(){
						
						$( '.egg' ).css( {
							
							'display': 'block',
							'left': PosX  + 'px',
							'top': PosY + 'px' 	
							
						} );
						
					}, 3500 );						
					
					setTimeout( function(){
						
						_this.animate( {
							
							'left': '-900px',
							'top': '20px'
							
						}, 5000 );		
						
					},20000 );
					
					setTimeout( function(){
						
						window.location.reload();					
						
					},28000 );
					
					return false;
					
				}
				
				var
					PosSeedX = e.pageX,
					PosSeedY = e.pageY;
					
				$( "<span class='fly'></span>" ).appendTo( '.coop' ).css( {
					
					'left': PosSeedX + 'px',
					'top': PosSeedY + 'px'
					
				} );
					
				_this.animate( {
					
					'left': PosSeedX + 'px',
					'top': PosSeedY + 'px'
					
				}, 1500 );	
				
				setTimeout( function(){
					
					$( '.fly' ).remove();
					
				}, 1200 );
				
				SeedCount++;
				
				// growth
				if( SeedCount > 5 && SeedCount < 10 ){ 
					
					_this.animate( {
					
						'width': settings.TeenagerChiken + 'px',
						'height': settings.TeenagerChiken + 'px',
						
					},1000 );
				
				} 
				if( SeedCount > 10 ){
					
					_this.animate( {
					
						'width': settings.Adult + 'px',
						'height': settings.Adult + 'px',
						
					},1000 );
				
				}					
				
			} );
					
			
			return function(){
				
			};
		
	}
	
} )( jQuery );