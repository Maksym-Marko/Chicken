;( function( $ ){
		
	$.fn.Chicken = function( options ){
		
		var
			settings = $.extend( {
				
				// size
				'ChickFirstSize' : 40,
				
				// growth
				'TeenagerChiken' : 80,
				'Adult' : 120
				
			}, options ),			
			
			_this = this,
			
			keyMoveChicken = true,
			
			/*
			*
			*	create chicken
			*
			*/				

			SeedCount = 0, // eatings seed
			
			ChickStand = 'img/chickstand.gif',
			
			ChickGo = 'img/chickstandgo.gif',
			
			PosX = 400, //Math.floor( ( Math.random() * 900 ) + 0 ),
			
			PosY = 300, //Math.floor( ( Math.random() * 400 ) + 0 ),
			
			CreateChicken = _this.css( {
				
				'width': settings.ChickFirstSize + 'px',
				'height': settings.ChickFirstSize + 'px',
				'left': PosX + 20 + 'px',
				'top': PosY + 20 + 'px' 				
				
			} ),
			
			/*
			*
			*	create fly auto
			*
			*/			
			CreateFly = setInterval( function(){
				
				if( keyMoveChicken == true ){
					
					keyMoveChicken = false;
					
					setTimeout( function(){
						
						keyMoveChicken = true;
						
					}, 1500 );
					
					var
						PosFlyX = Math.floor( ( Math.random() * 900 ) + 0 ),
				
						PosFlyY = Math.floor( ( Math.random() * 400 ) + 0 );
						
					$( '.fly' ).css( {
						
						'display': 'block',
						'left': PosFlyX + 'px',
						'top': PosFlyY + 'px'
						
					} );
					
					_this.animate( {
						
						'left': PosFlyX + 'px',
						'top': PosFlyY + 'px'
						
					},1500 );
					
					_this.children().attr( 'src', ChickGo );
					
					setTimeout( function(){
						
						$( '.fly' ).css( 'display', 'none' );
						_this.children().attr( 'src', ChickStand );
						
					}, 1200 );
					
					SeedCount++;
					
					// growth
					if( SeedCount > 10 && SeedCount < 20 ){ 
						
						_this.animate( {
						
							'width': settings.TeenagerChiken + 'px',
							'height': settings.TeenagerChiken + 'px',
							
						},1000 );
						
						ChickStand = 'img/chickteenstand.gif';
				
						ChickGo = 'img/chickteengo.gif';
					
					} 
					if( SeedCount > 20 && SeedCount < 30 ){
						
						_this.animate( {
						
							'width': settings.Adult + 'px',
							'height': settings.Adult + 'px',
							
						},1000 );	
						
						ChickStand = 'img/chickadultstand.gif';
				
						ChickGo = 'img/chickadultgo.gif';
					
					}	
					if( SeedCount > 30 ){
						
						_this.animate( {
							
							'left': PosX + 'px',
							'top': PosY + 'px' 	
							
						}, 3000 );
						
						setTimeout( function(){
							
							$( '.egg' ).css( {
								
								'display': 'block',
								'left': PosX + 20 + 'px',
								'top': PosY + 30 + 'px' 	
								
							} );
							
						}, 5500 );						
						
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
					
				}
				
				
				
			}, 5000 ),
			
			/*
			*
			*	create seed a click on
			*
			*/		
			CreateSeed = $( document ).on( 'click', function( e ){
				
				if( keyMoveChicken == true ){
					
					keyMoveChicken = false;
					
					setTimeout( function(){
						
						keyMoveChicken = true;
						
					}, 1500 );
					
					if( SeedCount > 30 ){
						
						_this.animate( {
							
							'left': PosX + 'px',
							'top': PosY + 'px' 	
							
						}, 3000 );
						
						setTimeout( function(){
							
							$( '.egg' ).css( {
								
								'display': 'block',
								'left': PosX + 20  + 'px',
								'top': PosY + 20 + 'px' 	
								
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
						
					$( '.seed' ).css( {
						
						'display': 'block',
						'left': PosSeedX + 'px',
						'top': PosSeedY + 'px'
						
					} );
						
					_this.animate( {
						
						'left': PosSeedX + 'px',
						'top': PosSeedY + 'px'
						
					}, 1500 );	
					
					_this.children().attr( 'src', ChickGo );
					
					setTimeout( function(){
						
						_this.children().attr( 'src', ChickStand );
						$( '.seed' ).css( 'display', 'none' );
						
					}, 1200 );
					
					SeedCount++;
					
					// growth
					if( SeedCount > 10 && SeedCount < 20 ){ 
						
						_this.animate( {
						
							'width': settings.TeenagerChiken + 'px',
							'height': settings.TeenagerChiken + 'px',
							
						},1000 );
						
						ChickStand = 'img/chickteenstand.gif';
				
						ChickGo = 'img/chickteengo.gif';
					
					} 
					if( SeedCount > 20 ){
						
						_this.animate( {
						
							'width': settings.Adult + 'px',
							'height': settings.Adult + 'px',
							
						},1000 );
						
						ChickStand = 'img/chickadultstand.gif';
				
						ChickGo = 'img/chickadultgo.gif';
					}
					
				}				
				
			} );
					
			
			return function(){
				
			};
		
	}
	
} )( jQuery );