from dataclasses import dataclass


@dataclass
class Manager:
    aoyz: int = 184
    immos: int = 158
    pptscd: int = 433

    def total(self):
        return self.aoyz + self.immos + self.pptscd


if __name__ == "__main__":
    x = Manager()
    print(x.total())
