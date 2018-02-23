import { Component } from "@nestjs/common";
import { WrestlerDTO } from "../dto/wrestler.dto";
import * as W from "../../wlw-engine/src/resources/wrestlers";

@Component()
export class WrestlerService {
  private readonly wrestlers: WrestlerDTO[] = [
    new W.JohnCena(),
    new W.RandyOrton(),
    new W.TripleH()
  ];

  findAll(): WrestlerDTO[] {
    return this.wrestlers;
  }

  find(uid: string): WrestlerDTO {
    return this.wrestlers.find(wrestler => wrestler.uid === uid);
  }
}
