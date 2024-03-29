const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const errorText = $("#error-text");
const bookingForm = $("#booking-form");
const detailsButton = $("#detailsTable");

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
        errorText.append(`<div class="alert alert-danger" role="alert">
        failed to login!
      </div>`);
      }
    } catch (error) {
      errorText.append(`<div class="alert alert-danger" role="alert">
      failed to login!
    </div>`);
    }
  } else {
    errorText.append(`<div class="alert alert-danger" role="alert">
    Please complete all fields!
  </div>`);
  }
};

const handleValidateBooking = async (event) => {
  event.preventDefault();

  errorText.empty();
  const bookingType = $("#bookingType").val();
  const duration = $("#booking-duration").val();
  const startDate = $("#startDate").val();

  if (bookingType && duration && startDate) {
    try {
      const url = window.location.pathname;
      const bikeId = url.substring(url.lastIndexOf("/") + 1);

      const payload = {
        bikeId,
        isDaily: bookingType === "daily" ? true : false,
        duration,
        startDate,
      };

      const response = await fetch("/api/bookings/validate", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { isUnavailable, success } = await response.json();
      if (isUnavailable) {
        const notAvailableModal = `<div class="modal" tabindex="-1" role="dialog" id= "unavailable-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Bike not available</h5>
      </div>
      <div class="modal-body">
        <p>The bike is not available for booking. Please select another booking date or another bike</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"id="view-bikes">View all bikes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close">Close</button>
      </div>
    </div>
  </div>
</div>`;
        $("#main").append(notAvailableModal);
        $("#unavailable-modal").modal("show");
        $("#view-bikes").click(() => {
          window.location.assign("/bikes");
        });
        $("#close").click(() => {
          $("#unavailable-modal").modal("hide");
        });
      } else {
        const successModal = `<div class="modal" tabindex="-1" role="dialog" id= "success-modal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Bike is available</h5>
              </div>
              <div class="modal-body">
                <p>The bike is available for booking. Do you want to continue booking?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id = "book-bike">Book Now</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close-success-modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
        $("#main").append(successModal);
        $("#success-modal").modal("show");
        $("#book-bike").click(() => {
          $("#success-modal").modal("hide");
          handleCreateBooking(payload);
        });
        $("#close-success-modal").click(() => {
          $("#success-modal").modal("hide");
        });
      }
    } catch (error) {
      errorText.append("Please try again.");
    }
  } else {
    errorText.append("Please complete all required fields.");
  }
};

const handleLogout = async (event) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);
  if (response.status !== 204) {
    console.error("Logout failed");
  } else {
    window.location.replace("/");
  }
};

const handleCreateBooking = async (payload) => {
  try {
    const response = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data, success } = await response.json();
    if (success) {
      const modal = `<div class="modal" tabindex="-1" id="booking-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Booking Confirmation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>✅ Booking confirmed.Total charges:£${data.total}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="booking-dashboard" >Go to Bookings</button>
          </div>
        </div>
      </div>
    </div>`;

      $("#main").append(modal);

      $("#booking-modal").modal("show");

      const showBookings = () => {
        window.location.assign("/dashboard");
      };

      $("#booking-dashboard").click(showBookings);

      $("#close-booking-modal").click(() => {
        $("#close-booking-modal").modal("hide");
      });
    } else {
      errorText.append("Failed to create a new booking2. Please try again.");
    }
  } catch (error) {
    errorText.append("Failed to create a new booking1. Please try again.");
  }
};

$("#logout-btn").click(handleLogout);

const handleDetailsPage = (event) => {
  const target = $(event.target);

  if (target.is('button[name="details-btn"]')) {
    const id = target.attr("id");

    window.location.assign(`/bookings/${id}`);
  }
};

detailsButton.click(handleDetailsPage);

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
bookingForm.submit(handleValidateBooking);
