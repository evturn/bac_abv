class Round < ActiveRecord::Base

  def calculate(sex, lbs, hours, drinks, abv)
    sex    = params(:name[sex])
    lbs    = params(:name[lbs])
    hours  = params(:name[hours])
    drinks = params(:name[drinks])
    abv    = params(:name[abv])

    rate = sex == "male" ? 0.73 : 0.66

    bev_oz = drinks * 12
    alc_oz = bev_oz * abv

    step_1 = (alc_oz * 5.14)
    step_2 = (lbs * rate)
    step_3 = (step_1 / step_2)
    step_4 = (0.015 * hours)

    bac    = (step_3 - step_4)

  end

end
