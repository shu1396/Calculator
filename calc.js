$(document).ready(function() {
	var s = "";
    $('.button').on('click',function(evt){
    	var buttonPressed = $(this).html();
    	if(buttonPressed!= '=')s = s + buttonPressed;
    	else if(buttonPressed == 'C'){$('.screen').html("")}
    	console.log(s);
    	var ans;
    	if(buttonPressed != '=') {$('.screen').html(s)}
    	if(buttonPressed === '='){
    		function precedence(op){
			    if(op == '+'||op == '-')
			    return 1;
			    if(op == '*'||op == '/')
			    return 2;
			    return 0;
			}
			function applyOp(a,b,op){
		    switch(op){
		        case '+': return Number(a) + Number(b);
		        case '-': return Number(a) - Number(b);
		        case '*': return Number(a) * Number(b);
		        case '/': return Number(a) / Number(b);
		    	}
			}
			function evaluate(tokens){
			    var i;
			    values =[];
			    ops =[]; 
			    for(i = 0; i < tokens.length; i++){
			    	console.log(values);
			    	console.log(ops);
			        if(tokens[i] == ' ')
			            continue;
			        else if(tokens[i]>='0'&& tokens[i]<='9'){
			            var val = 0;
			            while(i < tokens.length && (tokens[i]>='0'&& tokens[i]<='9'))
			            {
			                val = (val*10) + (tokens[i]-'0');
			                i++;
			            }
			            i--;
			            values.push(val);
			            console.log(val);
			        }
			        else
			        {
			            while(ops.length!=0 && precedence(ops[ops.length-1])>= precedence(tokens[i])){
			                var val2 = values[values.length-1];
			                values.pop();
			                var val1 = values[values.length-1];
			                values.pop();
			                var op = ops[ops.length-1];
			                ops.pop();
			                values.push(applyOp(val1, val2, op));
			            }
			            ops.push(tokens[i]);
			        }
			    }
			    while(ops.length!=0){
			    	console.log(values);
			    	console.log(ops);
			        var val2 = values[values.length-1];
			        values.pop();
			                 
			        var val1 = values[values.length-1];
			        values.pop();
			                 
			        var op = ops[ops.length-1];
			        ops.pop();
			                 
			        values.push(applyOp(val1, val2, op));
			    }
			    return values[values.length-1];
			}
			ans = evaluate(s);
			if(buttonPressed==='='){$('.screen').html(ans);}
    	}
    })
});
