// JavaScript Document

jQuery(document).ready(function () {


    jQuery("#smurfify").click(function () {
		
		
		var verbs = [' agree',' allow',' answer',' ask',' become',' begin',' believe',' believe',' borrow',' break',' bring',' bring',' buy',' call',' carry',' change',' close',' cut',' decide', 'eat', 'explain',' fall',' feel',' fill',' find',' finish',' follow',' fly',' forget',' get',' give',' go',' happen',' have',' hear',' help',' hold',' keep',' know',' learn',' leave',' like',' listen',' live',' look',' lose',' make',' may',' mean',' meet',' move',' must',' need',' open',' pay',' play',' promise',' put',' read',' remember',' run',' say',' see',' sell',' seem',' send',' set',' show',' sit',' sleep',' sleep',' speak',' spend',' stand',' start',' stop',' study',' suggest',' take',' talk',' tell',' think',' travel',' try',' turn',' understand',' use',' wait',' wake up',' walk',' want',' watch',' win',' work',' worry',' write'];
		var verbpast = [' agreed',' allowed',' answered',' asked',' became',' began',' believed',' borrowed',' broke',' brought',' bought',' called',' carried',' changed',' closed',' cut',' decided',' ate',' explained',' fell',' felt',' filled',' found',' finished',' followed',' flew',' forgot',' got',' gave',' went',' happened',' had',' heard',' helped',' held',' kept',' new',' learned',' left',' liked',' listened',' lived',' looked',' lost',' made',' might',' meant',' met',' moved',' needed',' opened',' paid',' played',' promised',' put',' read',' remembered',' ran',' said',' saw',' sold',' seemed',' sent',' showed',' sat',' slept',' spoke',' spent',' stood',' started',' stopped',' studied',' suggested',' took',' talked',' told',' thought',' travelled',' tried',' turned',' understood',' waited',' woke up',' walked',' wanted',' watched',' won',' worked',' worried',' wrote'];
		var smurfy = " smurf";
		var smurfied = " smurfed";
		var i;
		for (i = 0; i < verbs.length; ++i) {
			if(jQuery('p:contains("' + verbs[i] + '")').html()){
				jQuery('p').each(mark(verbs[i],smurfy));
				
			}
			if(jQuery('h1:contains("' + verbs[i] + '")').html()){
				jQuery('h1').each(mark(verbs[i],smurfy));
			}
			if(jQuery('h2:contains("' + verbs[i] + '")').html()){
				jQuery('h2').each(mark(verbs[i],smurfy));
			}
			if(jQuery('h3:contains("' + verbs[i] + '")').html()){
				jQuery('h3').each(mark(verbs[i],smurfy));
			}
			if(jQuery('span:contains("' + verbs[i] + '")').html()){
				jQuery('span').each(mark(verbs[i],smurfy));
			}
			if(jQuery('div:contains("' + verbs[i] + '")').html()){
				jQuery('div').each(mark(verbs[i],smurfy));
			}
			
		}
		
		for (i = 0; i < verbpast.length; ++i) {
			if(jQuery('p:contains("' + verbs[i] + '")').html()){
				jQuery('p:contains("' + verbs[i] + '")').html().replace(verbpast[i], smurfied);
			}
			if(jQuery('h1:contains("' + verbs[i] + '")').html()){
				jQuery('h1:contains("' + verbs[i] + '")').html().replace(verbpast[i], smurfied);
			}
			if(jQuery('h2:contains("' + verbs[i] + '")').html()){
				jQuery('h2:contains("' + verbs[i] + '")').html().replace(verbpast[i], smurfied);
			}
			if(jQuery('h3:contains("' + verbs[i] + '")').html()){
				jQuery('h3:contains("' + verbs[i] + '")').html().replace(verbpast[i], smurfied);
			}
			if(jQuery('span:contains("' + verbs[i] + '")').html()){
				jQuery('span:contains("' + verbs[i] + '")').html().replace(verbpast[i], smurfied);
			}
			if(jQuery('div:contains("' + verbs[i] + '")').html()){
				jQuery('div:contains("' + verbs[i] + '")').html().replace(verbpast[i], smurfied);
			}
			
		}

    });
	
	var mark = function(word, newword){
		return function(){
			this.innerHTML = this.innerHTML.replace(word,newword);
		}
	};
	

});
