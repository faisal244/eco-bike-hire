const signupForm = $('#signup-form');
const loginForm = $('#login-form');
const errorContainer = $('#error-container');

const handleSignup = async (event) => {
  console.log('working');
  event.preventDefault();

  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const confirmPassword = $('#confirmPassword').val();

  if (firstName && lastName && email && password && confirmPassword) {
    if (password === confirmPassword) {
      try {
        const payload = {
          firstName,
          lastName,
          email,
          password,
        };

        const response = await fetch('/auth/signup', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        console.log(data);
        if (data.success) {
          window.location.assign('/login');
        } else {
          //   renderError('signup-error', 'Failed to create account. Try again.');
          console.log('failed to create account1');
          errorContainer.append(
            `<p class="text-danger">error message: failed to create account</p>`
          );
        }
      } catch (error) {
        // renderError('signup-error', 'Failed to create account. Try again.');
        errorContainer.append(
          `<p class="text-danger">error message: failed to create account</p>`
        );
      }
    } else {
      //   renderError('signup-error', 'Passwords do not match. Try again.');
      console.log('passwords do not match');
      errorContainer.append(
        `<p class="text-danger">error message: passwords do not match</p>`
      );
    }
  } else {
    // renderError('signup-error', 'Please complete all required fields.');
    console.log('please complete all fields');
    errorContainer.append(
      `<p class="text-danger">error message: please complete all fields</p>`
    );
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $('#email').val();
  const password = $('#password').val();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
      };

      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign('/dashboard');
      } else {
        renderError('login failed. please try again.');
      }
    } catch (error) {
      renderError('login failed. please try again.');
    }
  } else {
    renderError('login-error', 'Please complete all required fields.');
  }
};

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
