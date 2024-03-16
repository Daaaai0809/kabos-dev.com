package presenter

type LoginResponse struct {
	AccessToken string `json:"access_token"`
}

type IAuthPresenter interface {
	GenerateLoginResponse(accessToken string) *LoginResponse
}
