function updateLengthLabel() {
    document.getElementById("lengthValue").innerText = document.getElementById("length").value;
}

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useUpper = document.getElementById("uppercase").checked;
    const useLower = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let charset = '';
    if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (!charset) {
        alert("Please select at least one character type!");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    document.getElementById("result").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("result");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Dark mode toggle
document.getElementById('checkbox').addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
