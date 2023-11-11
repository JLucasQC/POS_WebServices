const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function(err, client){
    //console.log('Descrever o WSDL',client.describe().Calculator.CalculatorSoap)

    client.Divide({intA: 20, intB: 0}, function(err, result){
        if(err){
            console.log(err)
        } else {
            console.log('A soma é: ' + result.DivideResult)
        }
    })
});