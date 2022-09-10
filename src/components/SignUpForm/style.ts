export const styles = {
  loginTitle: {
    textAlign: "center",
    fontWeight: "500",
    paddingBottom: 4,
  },
  loginButtonsGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
    "@media (max-width: 500px)": {
      flexDirection: "column",
      gap: 3,
    },
  },
  loginAgreement: {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
  loginAgreementText: {
    "@media (max-width: 500px)": {
      fontSize: 15,
    },
  },
  loginButtonSubmit: {
    width: 300,
    padding: 1.7,
  },
  loginFormHelperText: {
    color: "red",
    textAlign: "center",
  },
};
