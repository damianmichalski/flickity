'use strict';
(function(){ 
	/* W kodzie HTML tego przykładu  dodaliśmy też dwa szablony: 
	- template-product-list, który jest wrapperem listy produktów, oraz
	- template-product-item, który jest szablonem pojedynczej pozycji na liście. 
	
	Oprócz tego dodaliśmy też tablicę, zapisaną w zmiennej productsData, zawierającą kilka obiektów. Każdy z nich reprezentuje jeden produkt, który ma podaną nazwę oraz cenę. 
	
	Zaczniemy od stworzenia zmiennych z kodem naszych szablonów
	*/
	
	var templateList = document.getElementById('template-product-list').innerHTML;
	var templateItem = document.getElementById('template-product-item').innerHTML;
	
	// Następnie zoptymalizujemy drugą z nich, ponieważ tylko ona będzie wykonywana wielokrotnie. 	

	Mustache.parse(templateItem);
	
	// Teraz stworzymy zmienną, w której chcemy mieć kod HTML wszystkich produktów. 
	
	var listItems = '';
	
	/* Czas napisać pętlę, która dla każdego elementu z listy:
	1. wygeneruje kod HTML dla danego produktu, oraz
	2. doda ten wygenrowany kod HTML do zmiennej listItems. 
	
	Uwaga - zmienna productsData, której używamy poniżej, została zdefiniowana w kodzie HTML!
	*/
	
	for(var i = 0; i < productsData.length; i++){
		console.log(productsData);
		listItems += Mustache.render(templateItem, productsData[i]);
	}
	
	// Po wykonaniu pętli, zmienna listItems zawiera już kod HTML dla wszystkich produktów. Teraz wykorzystamy szablon templateList, aby wstawić produkty do wrappera listy. 
	
	var fullProductList = Mustache.render(templateList, {products: listItems});
	
	// I w pełni wyrenderowaną listę wyświetlimy na stronie: 
	
	results.insertAdjacentHTML('beforeend', fullProductList);
	
	/* Przeanalizuj powyższy przykład, a w szczególności zwróć uwagę na te kwestie: 
	
	1. Zmienna listItems po wykonaniu pętli zawiera w sobie tekst w postaci "<li>...</li><li>...</li><li>...</li>". 
	
	2. Ten tekst wstawiamy w kolejnym szablonie, tj. templateList, który dodaje nagłówek oraz "<ul></ul>". 
	
	3. W kodzie szablonu listy (template-product-list) nazwa "products" jest zamknięta w potrójnych nawiasach klamrowych, zamiast podwójnych. Jak możesz sprawdzić w dokumentacji pluginu Mustache.js, dzięki temu zawartość "zmiennej" products została wstawiona jako kod HTML, a nie jako tekst. Spróbuj zmienić potrójny nawias klamrowy na podwójny i zobacz jak zmieni się wynik wyświetlony na stronie. 
	
	ĆWICZENIE:
	1. Do każdego obiektu w tablicy productsData (która znajduje się w kodzie HTML) dodaj właściwość o nazwie "image" i wartości w postaci linka do jakiegoś obrazka, np. image: "http://via.placeholder.com/200x100/ffaaaa/000000?text=basketball".
	2. Zmień szablon template-product-item w taki sposób, aby nad tekstem wyświetlał się obrazek, którego adres jest podany w polu "image" tego produktu. 
	
	Zwróć uwagę, że w tym ćwiczeniu w ogóle nie musisz zmieniać kodu JS!
	*/
	
})(); 