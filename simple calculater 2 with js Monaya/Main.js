var n1 = document.getElementById('input1'),
	n2 = document.getElementById('input2'),
	answer = document.getElementById('result');

	// mybut=document.getElementById('butadd');

	butadd.onclick=function () {
		"use strict";
		return answer.value=parseFloat(n1.value)+parseFloat(n2.value);
	};
	butsub.onclick=function () {
		"use strict";
		return answer.value=parseFloat(n1.value)-parseFloat(n2.value);
	};
	butmul.onclick=function () {
		"use strict";
		return answer.value=parseFloat(n1.value)*parseFloat(n2.value);
	};
	butdiv.onclick=function () {
		"use strict";
		return answer.value=parseFloat(n1.value)/parseFloat(n2.value);
	};
