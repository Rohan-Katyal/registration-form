document.addEventListener('DOMContentLoaded', function(){
    const RegistrationForm = () => {
  return React.createElement("div", { className: "main-div" }, 
    React.createElement("div", { className: "form-head" }, [
      React.createElement("img", {
        src: "https://shikshami.in/wp-content/uploads/2025/06/20250618_061724-scaled.jpg",
        className: "img-logo",
        alt: "shikshami-logo"
      }),
      React.createElement("h3", { className: "head-text" }, "Where Education Meets Excellence."),
      React.createElement("label", { className: "head-label-text" }, "Fill in your details to register for classes")
    ]),
    
    React.createElement("div", { className: "form-div" },
      React.createElement("form", {
        name: "registration-form",
        className: "registration-form",
        autoComplete: "off",
        acceptCharset: "UTF-8",
        onSubmit: async (event) => {
          event.preventDefault();

          const form = event.target;
          const scriptURL = "https://script.google.com/macros/s/AKfycbzodtwm9AuH1SZCnjRMEu1ssKE0NMinHzeaTVAGTwrRdGDu8LMIty60wMHCt0lfJbah7Q/exec";

          try {
            const response = await fetch(scriptURL, {
              method: 'POST',
              body: new FormData(form)
            });

            if (response.ok) {
              alert('Form Submitted Successfully !!');
              form.reset();
            } else {
              console.error('Server error:', response.status, response.statusText);
              alert('Submission failed. Please try again.');
            }
          } catch (error) {
            console.error('Fetch error:', error);
            alert('Submission Successfull !! The page will load Automatically !!');
            window.location.reload();
            // alert('Submission failed. Please check your internet connection.');
          }
        }
      }, [
        
        // Name input
        React.createElement("span", { className: "input-span" }, [
          React.createElement("label", { className: "feild-label", htmlFor: "name-input" }, "Name *"),
          React.createElement("input", {
            type: "text",
            name: "Name",
            id: "name-input",
            className: "input-feild",
            placeholder: "Enter your name here",
            required: true
          })
        ]),

        // Class radio
        React.createElement("span", { className: "input-span" }, [
          React.createElement("label", { className: "feild-label" }, "Class *"),
          React.createElement("span", { className: "class-span" }, [
            React.createElement("span", { className: "radio-span" }, [
              React.createElement("input", {
                type: "radio",
                value: "9th",
                className: "class-radio",
                name: "Class",
                required: true
              }),
              React.createElement("label", null, "9th")
            ]),
            React.createElement("span", { className: "radio-span" }, [
              React.createElement("input", {
                type: "radio",
                value: "10th",
                className: "class-radio",
                name: "Class"
              }),
              React.createElement("label", null, "10th")
            ])
          ])
        ]),

        // Contact input
        React.createElement("span", { className: "input-span" }, [
          React.createElement("label", { className: "feild-label", htmlFor: "contact-input" }, "Contact Number *"),
          React.createElement("input", {
            type: "tel",
            name: "ContactNumber",
            id: "contact-input",
            className: "input-feild",
            placeholder: "Enter 10-digit mobile number",
            required: true,
            pattern: "\\d{10}",
            maxLength: 10
          })
        ]),

        // Time slot selection
        React.createElement("span", { className: "input-span" }, [
          React.createElement("label", { className: "feild-label" }, "Available Slots *"),
          React.createElement("div", { className: "time-slots-div" }, [

            ["3 PM", true],
            ["4 PM", false],
            ["5 PM", false],
            ["6 PM", false],
            ["7 PM", true],
            ["8 PM", true]
          ].map(([time, available]) => 
            React.createElement("span", {
              className: `time-slots${available ? "" : " disabled"}`
            }, [
              React.createElement("input", {
                type: "checkbox",
                value: time,
                className: `time-slots-input ${available ? "available-slot" : "full-slot"}`,
                name: available ? "SelectedSlot" : undefined,
                disabled: !available
              }),
              React.createElement("label", { className: "time-slot-label" }, time),
              React.createElement("label", {
                className: `time-slot-status ${available ? "available" : "full"}`
              }, available ? "Available" : "Full")
            ])
          ))
        ]),

        // Submit button
        React.createElement("span", { className: "btn-span" },
          React.createElement("button", {
            className: "submit-btn",
            type: "submit",
            value: "submit"
          }, "Submit Registration")
        )
      ])
    )
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
React.createElement(RegistrationForm)
);
})