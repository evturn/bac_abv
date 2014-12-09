class Round < ActiveRecord::Base

  def calculate(abv, lbs, sex, hours)

    # A 12 fl_oz glass of .05 ABV beer
    # A 5 fl_oz glass of  .12 ABV wine
    # A 1.5 fl_oz glass of .40 ABV spirit

    # all contain 0.6 fl_oz of alcohol

    # 3 beers (1.8 fl_oz)
    # 155 lbs
    # male
    # 1 hour

    fl_oz = num_beer * 0.6

    step_1 = (fl_oz * 5.14) # 9.25
    step_2 = (lbs * sex)  # 113.5
    step_3 = (step_1 / step_2) # 0.08
    step_4 = (0.015 * hours) # 0.015
    step_5 = (step_3 - step_4) # 0.06




    # r = sex == "male" ? 0.73 : 0.66
    # bac = ((abv * 5.14) / (lbs * r)) - (0.015 * hours)




  end

end
