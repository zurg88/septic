'use strict';

// css
import '../css/main.css';

// JS
import popup from './modules/popup';
import accordion from './modules/accordion';
import { calculator } from './modules/calculator';
import callMeForms from './modules/forms';
import formValidation from './modules/form-validation';
import moreInfo from './modules/more-info';

// Popup

const callBtn = document.querySelectorAll('.call-btn'),
	poupCall = document.querySelector('.popup-call');

callBtn.forEach(item => {
	popup(item, poupCall);
});

const discountBtn = document.querySelectorAll('.discount-btn'),
	popupDiscount = document.querySelector('.popup-discount');

discountBtn.forEach(item => {
	popup(item, popupDiscount);
});

const checkBtn = document.querySelector('.check-btn'),
	popupCheck = document.querySelector('.popup-check');

popup(checkBtn, popupCheck);

const consultationBtn = document.querySelector('.consultation-btn'),
	popupConsultation = document.querySelector('.popup-consultation');

popup(consultationBtn, popupConsultation);

// Accordion
const accordionCalc = document.getElementById('accordion-calc'),
	accordionFaq = document.getElementById('accordion-faq');

accordion(accordionCalc);
accordion(accordionFaq);

// Calculator
calculator();

// Forms Validation
formValidation();

// Forms
callMeForms();

// More info Btn
moreInfo();
