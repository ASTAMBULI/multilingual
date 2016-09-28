$(document).ready(function() {
    //Page Loading
    /*=======================================
               Languages Array
    =========================================*/
    var languages = [{langId:1,
    				   langCode:'en',
    				   country:'United Kingdom',
    				   name:'English',
    				   siteContent:{
    					   links:{
    						   form:{
    							   signIn:'Sign In',
    							   signUp:'Sign Up',
    							   or:'or',
    							   inputs:[{
    								   name:'fullname',
    								   title:'Full name',
    								   placeholder:'Enter your full name'
    							   },
    							   {
    								   name:'password',
    								   title:'Password',
    								   placeholder:'Your password here'
    							   },
    							   {
    								   name:'email',
    								   title:'E-mail',
    								   placeholder:'Your e-mail goes here'
    							   }],
    							   agreement:{
    								   initial:'I agree all statements in',
    								   final:'terms of service'
    							   },
    							   sliderText:[{
    								   imageId:3,
    								   text:'How do You Find Chilling on The Beach'
    							   },{
    								   imageId:1,
    								   text:'Expirience The Difference'
    							   },{
    								   imageId:2,
    								   text:'Best Beach Ever, Enjoy!'
    							   }]
    								
    						   }
    						   
    					   }
    				   }
    },
    	{  langId:2,
		   langCode:'sw',
		   country:'Tanzania',
		   name:'swahili',
		   siteContent:{
			   links:{
				   form:{
					   signIn:'Ingia',
					   signUp:'Jisajili',
					   or:'au',
					   inputs:[{
						   name:'fullname',
						   title:'Jina kamili',
						   placeholder:'Ingiza jina lako kamili'
					   },
					   {
						   name:'password',
						   title:'Nywila',
						   placeholder:'Nywila yako hapa'
					   },
					   {
						   name:'email',
						   title:'Barua Pepe',
						   placeholder:'Barua pepe yako hapa'
					   }],
					   agreement:{
						   initial:'Nakubaliana na masharti yote katika',
						   final:'vigezo vya huduma'
					   },
					   sliderText:[{
						   imageId:3,
						   text:'Unaonaje Ukiwa Ufukweni'
					   },{
						   imageId:1,
						   text:'Jionee Tofauti'
					   },{
						   imageId:2,
						   text:'Ufukwe Bora Kuliko, Burudika!'
					   }]
						
				   }
				   
			   }
		   }
}];
    
/*=======================================
   Images Array
=========================================*/
    var images=[{imageId:1,
    			  imgUrl:'beach1.jpg',
    			  bgColor:'#ccc'},
    			  {imageId:2,
        		   imgUrl:'beach1.jpg',
        		   bgColor:'#ff4411'
        			   },
        		   {imageId:3,
         			imgUrl:'beach1.jpg',
         			bgColor:'#ee33ff'
         				}
        		   ]
    

    //variables


});