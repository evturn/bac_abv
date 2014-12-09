class Round < ActiveRecord::Base

def calculate(abv, lbs, sex, hours)


  step_1 = (fl_oz * 5.14)
  step_2 = (lbs * sex)
  step_3 = (step_1 / step_2)
  step_4 = (0.015 * hours)
  step_5 = (step_3 - step_4)

  # r = sex == "male" ? 0.73 : 0.66
  # bac = ((abv * 5.14) / (lbs * r)) - (0.015 * hours)



  end

end
