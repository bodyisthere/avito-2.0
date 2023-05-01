import { IMopenAndScooter, MopenAndScooterBase, MopenAndScooterBenzin, MopenAndScooterElectro, MopenAndScooterNull } from "./IMopenAndScooter";

interface MotorcyclesBase extends MopenAndScooterBase {
  
}

interface MotorcyclesElectro extends MopenAndScooterElectro {
  
}

interface MotorcyclesBenzin extends MopenAndScooterBenzin{
  numberOfCylinders?: 1 | 2 | 3 | 4 | 5 | 6 | null
  transmission?: "Механика" | "Автомат" | "Робот" | "Вариатор" | null
  cylinderArrangement?: "V-образное" | "Оппозитное" | "Рядное" | null
}

interface MotorcyclesNull extends MopenAndScooterNull {

}

export type IMotorcycles = MotorcyclesElectro | MotorcyclesBenzin | MotorcyclesNull;