import { Component } from "@nestjs/common";
import { WrestlerDTO } from "../dto/wrestler.dto";
import * as W from "../../wlw-engine/src/resources/wrestlers";

@Component()
export class WrestlerService {
  private readonly wrestlers: WrestlerDTO[];

  constructor() {
    this.wrestlers = [W.JohnCena, W.TripleH];
  }

  findAll(): WrestlerDTO[] {
    return this.wrestlers;
  }

  find(uid: string): WrestlerDTO {
    return this.wrestlers.find(wrestler => wrestler.uid === uid);
  }
}
