const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const errorText = $("#error-text");
const bookingForm = $("#booking-form");
//const bookForm = document.getElementById("booking-form");

const handleSignup = async (event) => {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  errorText.empty();

  if (firstName && lastName && email && password && confirmPassword) {
    if (password === confirmPassword) {
      try {
        const payload = {
          firstName,
          lastName,
          email,
          password,
        };

        const response = await fetch("/auth/signup", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.success) {
          window.location.assign("/login");
        } else {
          errorText.append(
            `<p class="text-danger">Failed to create account</p>`
          );
        }
      } catch (error) {
        errorText.append(`<p class="text-danger">Failed to create account</p>`);
      }
    } else {
      errorText.append(`<p class="text-danger">Passwords do not match</p>`);
    }
  } else {
    errorText.append(`<p class="text-danger">Please complete all fields</p>`);
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  errorText.empty();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
      };

      const response = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign("/dashboard");
      } else {
        errorText.append(`<p class="text-danger">Failed to login</p>`);
      }
    } catch (error) {
      errorText.append(`<p class="text-danger">Failed to login</p>`);
    }
  } else {
    errorText.append(`<p class="text-danger">Please complete all fields</p>`);
  }
};

const handleCreateBooking = async (event) => {
  event.preventDefault();

  errorText.empty();
  const bookingType = $("#bookingType").val();
  const duration = $("#booking-duration").val();
  const startDate = $("#startDate").val();

  if (bookingType && duration && startDate) {
    try {
      const payload = {
        bikeId: event.target.dataset.value,
        isDaily: bookingType === "daily" ? true : false,
        duration,
        startDate,
      };

      const response = await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        console.log(data);

        const modal = `<div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Booking confirmed. Total charges: ${data.total}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>`;
        $("#main").append(modal);
        //window.location.assign("/dashboard");
        console.log / success;
      } else {
        errorText.append("Failed to create a new booking2. Please try again.");
      }
    } catch (error) {
      errorText.append("Failed to create a new booking1. Please try again.");
    }
  } else {
    errorText.append("Please complete all required fields.");
  }
};

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
bookingForm.submit(handleCreateBooking);
