import $ from "jquery";
import { emailValidation } from "./utils/emailValidation/emailValidations";
import { nameValidation } from "./utils/nameValidation/namedValidation";
import { passwordValidation } from "./utils/passwordValidation/passwordValidation";

// Pēc visu importu pievienošanas injektējam HTML iekš DOM. Izmantota iebūvētā jQuery metode html(). Iekš title atribūta teksts priekš tooltipa.
$(".js-form-wrapper").html(
	`<form class="js-validation-form">
		<label for="name">
			<h3>Enter your username:</h3>
			<input type="text" id="name" class="form-input js-name" placeholder="Name" title="At least 2 characters, but less than 51. Without digits and special characters!"/>
		</label>
		<label for="email">
			<h3>Enter your email:</h3>
			<input type="text" id="email" class="form-input js-email" placeholder="Email" title="Enter a valid email address!"/>
		</label>
		<label for="password">
			<h3>Enter your password:</h3>
			<input type="password" id="password" class="form-input js-password" placeholder="Password" title="At least 8 characters AND at least 1 special character, AND at least 1 capital letter, AND at least 1 digit!" autocomplete="off"/>
		</label>
		<button type="submit" class="submit-button">Submit</button>
  </form>`
);

// .on() metode pievieno funkciju, ko trigerē events.
$(".js-validation-form").on("submit", (e) => {
  e.preventDefault(); // Izslēdzam default uzvedību uz pārlādi

  // Jādabū vērtības no input laukiem. Uzreiz pievienot toString(), jo savādāk inputa konstante uzņemas tipu 'string | number | string[]'
  const emailInput = $(".js-email").val().toString();
  const nameInput = $(".js-name").val().toString();
  const passwordInput = $(".js-password").val().toString();

  // Te notiek pārbaude pēc validācijas funkcijām:
  const emailIsValid = emailValidation(emailInput);
  const nameIsValid = nameValidation(nameInput);
  const passwordIsValid = passwordValidation(passwordInput);

  /* Double check'am skat. vai ielasās vērtības, kas ievadītas input laukos:
	console.log(emailIsValid)
	console.log(nameIsValid)
	console.log(passwordIsValid) */

  // Ielasās Toastify funkcija (definēta zemāk) ar individualizētu tekstu un fona krāsu, atkarībā no rezultāta:
  if (emailIsValid && nameIsValid && passwordIsValid) {
    repeatedToastify("Data has been submitted!", "#009900");
  } else {
    if (!emailIsValid) {
      repeatedToastify("Invalid email!", "#e3242b");
    }
    if (!nameIsValid) {
      repeatedToastify("Invalid name!", "#e3242b");
    }
    if (!passwordIsValid) {
      repeatedToastify("Invalid password!", "#e3242b");
    }
  }
});

// Te Toastify funkcija, kas paziņo par veiksmīģu datu iesniegšanu vai kļūdu:
const repeatedToastify = (textToShow: string, color: string) => {
  // @ts-ignore
  // prettier-ignore
  window.Toastify({
      text: textToShow,
      duration: 5000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: color,
      },
      onClick: function () {},
    })
    .showToast();
};
