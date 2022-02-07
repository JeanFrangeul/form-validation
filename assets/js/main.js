(function () {
    'use strict'
  
    // Declarer le formulaire
    let form = document.getElementById('projectForm');

    form.addEventListener('submit', (event) => {
        Array.from(form.elements).forEach((input) => {
            if ( input.type !== "submit" ) {
                if ( !validateFields(input) ) {
                    event.preventDefault();
                    event.stopPropagation();

                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                    input.nextElementSibling.style.display = "block";
                } else {
                    input.nextElementSibling.style.display = "none";
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                }
            }
        });
    }, false)
})();





//vvvvvvvvvvvvvvvvv FONCTIONS DE VALIDATION vvvvvvvvvvvvvvvvv//

const validateRequired = (input) => {
    return !(input.value == null || input.value == "");
};

const validateLength = (input, minLength, maxLength) => {
    return !(input.value.length < minLength || input.value.length > maxLength);
};

// Validation REGEX : latin $ lettres

const validateText = (input) => {
    return input.value.match("^[A-Za-z]+$");
};

const validateEmail = (input) => {
    let EMAIL = input.value;
    let POSAT = EMAIL.indexOf("@");
    let POSDOT = EMAIL.lastIndexOf(".");

    return !(POSAT < 1 || (POSDOT - POSAT < 2));
};

const validatePhoneNumber = (input) => {
    return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
};

const validatePostcode = (input) => {
    return input.value.match("^(0[1-9]|[0-9][0-9])[0-9][0-9][0-9]$");
};

const validateAddress = (input) => {
    return input.value.match(/^\s*\S*(?:\s+\S+){2}/);
};

const validateCheckbox = (input) => {
    return input.checked;
};





//vvvvvvvvvvvvvvvvv VALIDATION DU FORMULAIRE vvvvvvvvvvvvvvvvv//

const validateFields = (input) => {
    let fieldName = input.name;

    if (fieldName == "firstName" || fieldName == "lastName") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validateLength(input, 2, 20)) {
            return false;
        }

        if (!validateText(input)) {
            return false;
        }

        return(true);
    };

    if (fieldName == "email") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validateEmail(input)) {
            return false;
        }

        return(true);
    };

    if (fieldName == "phoneNumber") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validatePhoneNumber(input)) {
            return false;
        }

        return(true);
    }
    
    if (fieldName == "address") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validateAddress(input)) {
            return false;
        }

        return(true);
    }

    if (fieldName == "city") {
        if (!validateRequired(input)) {
            return false;
        }

        return(true);
    }

    if (fieldName == "postcode") {
        if (!validateRequired(input)) {
            return false;
        }

        if (!validatePostcode(input)) {
            return false;
        }

        return(true);
    }

    if (fieldName == "conditions") {
        if (!validateCheckbox(input)) {
            return false;
        }

        return(true);
    }
};