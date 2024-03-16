package presenter

import (
	"github.com/Daaaai0809/kabos-dev.com/usecase/presenter"
)

type AuthPresenter struct{}

func NewAuthPresenter() presenter.IAuthPresenter {
	return &AuthPresenter{}
}

func (p *AuthPresenter) GenerateLoginResponse(accessToken string) *presenter.LoginResponse {
	return &presenter.LoginResponse{
		AccessToken: accessToken,
	}
}
