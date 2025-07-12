import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = Number(num1);
        const b = Number(num2);
        let result = 0;

        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = b !== 0 ? a / b : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid';
        }

        setResult(result);
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    };

    const calculatorStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '8px',
        width: '100%',
        fontSize: '16px',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        marginTop: '15px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    };

    const resultStyle = {
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={calculatorStyle}>
                <h2>React Calculator</h2>

                <input
                    type="number"
                    placeholder="Number 1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    style={inputStyle}
                />

                <select
                    value={operator}
                    onChange={(e) => setOperator(e.target.value)}
                    style={inputStyle}
                >
                    <option value="+">+</option>
                    <option value="-">−</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </select>

                <input
                    type="number"
                    placeholder="Number 2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    style={inputStyle}
                />

                <button onClick={calculate} style={buttonStyle}>
                    Calculate
                </button>

                <div style={resultStyle}>
                    Result: {result !== null ? result : 'None'}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
