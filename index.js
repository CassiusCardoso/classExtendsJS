class CPFValidator {
    constructor(cpf) {
        this._cpf = cpf.replace(/\[^\d]+/g, '')  //Remove os caracteres especiais
    }
    // Método principal para verificar se o CPF é válido
    isValid() {
        if (!this.hasValidLength() || this.hasAllSameDigits()) return false;

        const digito1 = this.firstNumberVerify();
        const digito2 = this.secondNumberVerify();

        return this.verifyNumbers(digito1, digito2);
    }

    // Verifica se o CPF tem 11 dígitos
    hasValidLength() {
        return this._cpf.length === 11;
    }

    // Verifica se todos os dígitos do CPF são iguais
    hasAllSameDigits() {
        const firstNumber = cpf[0];
        return this.cpf.split('').every(number => number === firstNumber)
    }

    // Calcula o primeiro dígito verificador

    firstNumberVerify() {
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(this.cpf.charAt(i)) * (10 - i);
        }

        const resto = 11 - (soma % 11);
        return (resto === 10) || (resto === 11) ? 0 : resto;

    }

    secondNumberVerify() {
        let soma = 0;
        for (let i = 0; i < 10; i++){
            soma += parseInt(this.cpf.charAt(i)) * (11 - i);
        }

        const resto = 11 - (soma % 11);
        return (resto === 10) || (resto === 11) ? 0 : resto;
    }

    // Verifica os dígitos calculados com os dígitos do CPF
    verifyNumbers(digito1, digito2){
        return digito1 === parseInt(this.cpf.charAt(9)) && digito2 === parseInt(this.cpf.charAt(10));
    }
}

const cpfValidator = new CPFValidator('123456789-02')
console.log(cpfValidator.isValid())