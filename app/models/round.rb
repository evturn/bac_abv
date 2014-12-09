class Round < ActiveRecord::Base

  def calculate(abv, lbs, sex, hours)

    # The following all contain 0.6 fl_oz of alcohol
    # A 12 fl_oz glass of .05 ABV beer
    # A 5 fl_oz glass of  .12 ABV wine
    # A 1.5 fl_oz glass of .40 ABV spirit

    # *** Example ***
    # 3 glasses (3 * 12)
    # 1.8 alc_oz (36 * 0.05)
    # 155 lbs
    # 0.73 (male)
    # 1 hours


    bev_oz = glasses * 12
    alc_oz = bev_oz * abv

    step_1 = (alc_oz * 5.14) # 9.25
    step_2 = (lbs * sex)  # 113.5
    step_3 = (step_1 / step_2) # 0.08
    step_4 = (0.015 * hours) # 0.015
    bac    = (step_3 - step_4) # 0.06




    # r = sex == "male" ? 0.73 : 0.66
    # bac = ((abv * 5.14) / (lbs * r)) - (0.015 * hours)




  end

end
