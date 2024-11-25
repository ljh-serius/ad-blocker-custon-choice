<script>
  // Define googlefc and the controlled messaging function on the Window.
  window.googlefc = window.googlefc || {};
  googlefc.controlledMessagingFunction = async (message) => {
   // Determine if the Offerwall should display or not.
   const shouldDisplayOfferwall = await determineIfUserIsSubscriber();
   const applicableMessageTypes = [];

   if (!shouldDisplayOfferwall) {
     // Do not show the Offerwall, but allow other message types to display.
     applicableMessageTypes.push(window.googlefc.MessageTypeEnum.OFFERWALL);
     message.proceed(false, applicableMessageTypes);
   } else {
     // Otherwise, show messages as usual.
     message.proceed(true);
   }
  }
</script>
