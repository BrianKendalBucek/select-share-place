const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyD6PyTay39sgUB-git_8C5ysOkp81eSXE4';

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!

}

form.addEventListener('submit', searchAddressHandler);