// code generated by pbf v3.2.1

// PlatformMetadata ========================================

var PlatformMetadata = (exports.PlatformMetadata = {});

PlatformMetadata.read = function (pbf, end) {
    return pbf.readFields(
        PlatformMetadata._readField,
        {
            type: 0,
            name: '',
            version: '',
            minecraftVersion: '',
            sparkVersion: 0,
        },
        end
    );
};
PlatformMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) obj.name = pbf.readString();
    else if (tag === 3) obj.version = pbf.readString();
    else if (tag === 4) obj.minecraftVersion = pbf.readString();
    else if (tag === 7) obj.sparkVersion = pbf.readVarint(true);
};

PlatformMetadata.Type = {
    SERVER: {
        value: 0,
        options: {},
    },
    CLIENT: {
        value: 1,
        options: {},
    },
    PROXY: {
        value: 2,
        options: {},
    },
};

// SystemStatistics ========================================

var SystemStatistics = (exports.SystemStatistics = {});

SystemStatistics.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics._readField,
        {
            cpu: null,
            memory: null,
            gc: {},
            disk: null,
            os: null,
            java: null,
            uptime: 0,
            net: {},
        },
        end
    );
};
SystemStatistics._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.cpu = SystemStatistics.Cpu.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2)
        obj.memory = SystemStatistics.Memory.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 3) {
        var entry = SystemStatistics._FieldEntry3.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.gc[entry.key] = entry.value;
    } else if (tag === 4)
        obj.disk = SystemStatistics.Disk.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 5)
        obj.os = SystemStatistics.Os.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 6)
        obj.java = SystemStatistics.Java.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 7) obj.uptime = pbf.readVarint(true);
    else if (tag === 8) {
        entry = SystemStatistics._FieldEntry8.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.net[entry.key] = entry.value;
    }
};

// SystemStatistics.Cpu ========================================

SystemStatistics.Cpu = {};

SystemStatistics.Cpu.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Cpu._readField,
        { threads: 0, processUsage: null, systemUsage: null, modelName: '' },
        end
    );
};
SystemStatistics.Cpu._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.threads = pbf.readVarint(true);
    else if (tag === 2)
        obj.processUsage = SystemStatistics.Cpu.Usage.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 3)
        obj.systemUsage = SystemStatistics.Cpu.Usage.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 4) obj.modelName = pbf.readString();
};

// SystemStatistics.Cpu.Usage ========================================

SystemStatistics.Cpu.Usage = {};

SystemStatistics.Cpu.Usage.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Cpu.Usage._readField,
        { last1m: 0, last15m: 0 },
        end
    );
};
SystemStatistics.Cpu.Usage._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.last1m = pbf.readDouble();
    else if (tag === 2) obj.last15m = pbf.readDouble();
};

// SystemStatistics.Memory ========================================

SystemStatistics.Memory = {};

SystemStatistics.Memory.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Memory._readField,
        { physical: null, swap: null },
        end
    );
};
SystemStatistics.Memory._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.physical = SystemStatistics.Memory.MemoryPool.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 2)
        obj.swap = SystemStatistics.Memory.MemoryPool.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// SystemStatistics.Memory.MemoryPool ========================================

SystemStatistics.Memory.MemoryPool = {};

SystemStatistics.Memory.MemoryPool.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Memory.MemoryPool._readField,
        { used: 0, total: 0 },
        end
    );
};
SystemStatistics.Memory.MemoryPool._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.used = pbf.readVarint(true);
    else if (tag === 2) obj.total = pbf.readVarint(true);
};

// SystemStatistics.Gc ========================================

SystemStatistics.Gc = {};

SystemStatistics.Gc.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Gc._readField,
        { total: 0, avgTime: 0, avgFrequency: 0 },
        end
    );
};
SystemStatistics.Gc._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.total = pbf.readVarint(true);
    else if (tag === 2) obj.avgTime = pbf.readDouble();
    else if (tag === 3) obj.avgFrequency = pbf.readDouble();
};

// SystemStatistics.Disk ========================================

SystemStatistics.Disk = {};

SystemStatistics.Disk.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Disk._readField,
        { used: 0, total: 0 },
        end
    );
};
SystemStatistics.Disk._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.used = pbf.readVarint(true);
    else if (tag === 2) obj.total = pbf.readVarint(true);
};

// SystemStatistics.Os ========================================

SystemStatistics.Os = {};

SystemStatistics.Os.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Os._readField,
        { arch: '', name: '', version: '' },
        end
    );
};
SystemStatistics.Os._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.arch = pbf.readString();
    else if (tag === 2) obj.name = pbf.readString();
    else if (tag === 3) obj.version = pbf.readString();
};

// SystemStatistics.Java ========================================

SystemStatistics.Java = {};

SystemStatistics.Java.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.Java._readField,
        { vendor: '', version: '', vendorVersion: '', vmArgs: '' },
        end
    );
};
SystemStatistics.Java._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.vendor = pbf.readString();
    else if (tag === 2) obj.version = pbf.readString();
    else if (tag === 3) obj.vendorVersion = pbf.readString();
    else if (tag === 4) obj.vmArgs = pbf.readString();
};

// SystemStatistics.NetInterface ========================================

SystemStatistics.NetInterface = {};

SystemStatistics.NetInterface.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics.NetInterface._readField,
        {
            rxBytesPerSecond: null,
            txBytesPerSecond: null,
            rxPacketsPerSecond: null,
            txPacketsPerSecond: null,
        },
        end
    );
};
SystemStatistics.NetInterface._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.rxBytesPerSecond = RollingAverageValues.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 2)
        obj.txBytesPerSecond = RollingAverageValues.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 3)
        obj.rxPacketsPerSecond = RollingAverageValues.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 4)
        obj.txPacketsPerSecond = RollingAverageValues.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// SystemStatistics._FieldEntry3 ========================================

SystemStatistics._FieldEntry3 = {};

SystemStatistics._FieldEntry3.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics._FieldEntry3._readField,
        { key: '', value: null },
        end
    );
};
SystemStatistics._FieldEntry3._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = SystemStatistics.Gc.read(pbf, pbf.readVarint() + pbf.pos);
};

// SystemStatistics._FieldEntry8 ========================================

SystemStatistics._FieldEntry8 = {};

SystemStatistics._FieldEntry8.read = function (pbf, end) {
    return pbf.readFields(
        SystemStatistics._FieldEntry8._readField,
        { key: '', value: null },
        end
    );
};
SystemStatistics._FieldEntry8._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = SystemStatistics.NetInterface.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// PlatformStatistics ========================================

var PlatformStatistics = (exports.PlatformStatistics = {});

PlatformStatistics.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics._readField,
        {
            memory: null,
            gc: {},
            uptime: 0,
            tps: null,
            mspt: null,
            ping: null,
            playerCount: 0,
            world: null,
        },
        end
    );
};
PlatformStatistics._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.memory = PlatformStatistics.Memory.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 2) {
        var entry = PlatformStatistics._FieldEntry2.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.gc[entry.key] = entry.value;
    } else if (tag === 3) obj.uptime = pbf.readVarint(true);
    else if (tag === 4)
        obj.tps = PlatformStatistics.Tps.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 5)
        obj.mspt = PlatformStatistics.Mspt.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 6)
        obj.ping = PlatformStatistics.Ping.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 7) obj.playerCount = pbf.readVarint(true);
    else if (tag === 8)
        obj.world = WorldStatistics.read(pbf, pbf.readVarint() + pbf.pos);
};

// PlatformStatistics.Memory ========================================

PlatformStatistics.Memory = {};

PlatformStatistics.Memory.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics.Memory._readField,
        { heap: null },
        end
    );
};
PlatformStatistics.Memory._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.heap = PlatformStatistics.Memory.MemoryPool.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// PlatformStatistics.Memory.MemoryPool ========================================

PlatformStatistics.Memory.MemoryPool = {};

PlatformStatistics.Memory.MemoryPool.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics.Memory.MemoryPool._readField,
        { used: 0, total: 0 },
        end
    );
};
PlatformStatistics.Memory.MemoryPool._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.used = pbf.readVarint(true);
    else if (tag === 2) obj.total = pbf.readVarint(true);
};

// PlatformStatistics.Gc ========================================

PlatformStatistics.Gc = {};

PlatformStatistics.Gc.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics.Gc._readField,
        { total: 0, avgTime: 0, avgFrequency: 0 },
        end
    );
};
PlatformStatistics.Gc._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.total = pbf.readVarint(true);
    else if (tag === 2) obj.avgTime = pbf.readDouble();
    else if (tag === 3) obj.avgFrequency = pbf.readDouble();
};

// PlatformStatistics.Tps ========================================

PlatformStatistics.Tps = {};

PlatformStatistics.Tps.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics.Tps._readField,
        { last1m: 0, last5m: 0, last15m: 0 },
        end
    );
};
PlatformStatistics.Tps._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.last1m = pbf.readDouble();
    else if (tag === 2) obj.last5m = pbf.readDouble();
    else if (tag === 3) obj.last15m = pbf.readDouble();
};

// PlatformStatistics.Mspt ========================================

PlatformStatistics.Mspt = {};

PlatformStatistics.Mspt.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics.Mspt._readField,
        { last1m: null, last5m: null },
        end
    );
};
PlatformStatistics.Mspt._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.last1m = RollingAverageValues.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2)
        obj.last5m = RollingAverageValues.read(pbf, pbf.readVarint() + pbf.pos);
};

// PlatformStatistics.Ping ========================================

PlatformStatistics.Ping = {};

PlatformStatistics.Ping.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics.Ping._readField,
        { last15m: null },
        end
    );
};
PlatformStatistics.Ping._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.last15m = RollingAverageValues.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// PlatformStatistics._FieldEntry2 ========================================

PlatformStatistics._FieldEntry2 = {};

PlatformStatistics._FieldEntry2.read = function (pbf, end) {
    return pbf.readFields(
        PlatformStatistics._FieldEntry2._readField,
        { key: '', value: null },
        end
    );
};
PlatformStatistics._FieldEntry2._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = PlatformStatistics.Gc.read(pbf, pbf.readVarint() + pbf.pos);
};

// RollingAverageValues ========================================

var RollingAverageValues = (exports.RollingAverageValues = {});

RollingAverageValues.read = function (pbf, end) {
    return pbf.readFields(
        RollingAverageValues._readField,
        { mean: 0, max: 0, min: 0, median: 0, percentile95: 0 },
        end
    );
};
RollingAverageValues._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.mean = pbf.readDouble();
    else if (tag === 2) obj.max = pbf.readDouble();
    else if (tag === 3) obj.min = pbf.readDouble();
    else if (tag === 4) obj.median = pbf.readDouble();
    else if (tag === 5) obj.percentile95 = pbf.readDouble();
};

// WorldStatistics ========================================

var WorldStatistics = (exports.WorldStatistics = {});

WorldStatistics.read = function (pbf, end) {
    return pbf.readFields(
        WorldStatistics._readField,
        { totalEntities: 0, entityCounts: {}, worlds: [] },
        end
    );
};
WorldStatistics._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.totalEntities = pbf.readVarint(true);
    else if (tag === 2) {
        var entry = WorldStatistics._FieldEntry2.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.entityCounts[entry.key] = entry.value;
    } else if (tag === 3)
        obj.worlds.push(
            WorldStatistics.World.read(pbf, pbf.readVarint() + pbf.pos)
        );
};

// WorldStatistics.World ========================================

WorldStatistics.World = {};

WorldStatistics.World.read = function (pbf, end) {
    return pbf.readFields(
        WorldStatistics.World._readField,
        { name: '', totalEntities: 0, regions: [] },
        end
    );
};
WorldStatistics.World._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.totalEntities = pbf.readVarint(true);
    else if (tag === 3)
        obj.regions.push(
            WorldStatistics.Region.read(pbf, pbf.readVarint() + pbf.pos)
        );
};

// WorldStatistics.Region ========================================

WorldStatistics.Region = {};

WorldStatistics.Region.read = function (pbf, end) {
    return pbf.readFields(
        WorldStatistics.Region._readField,
        { totalEntities: 0, chunks: [] },
        end
    );
};
WorldStatistics.Region._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.totalEntities = pbf.readVarint(true);
    else if (tag === 2)
        obj.chunks.push(
            WorldStatistics.Chunk.read(pbf, pbf.readVarint() + pbf.pos)
        );
};

// WorldStatistics.Chunk ========================================

WorldStatistics.Chunk = {};

WorldStatistics.Chunk.read = function (pbf, end) {
    return pbf.readFields(
        WorldStatistics.Chunk._readField,
        { x: 0, z: 0, totalEntities: 0, entityCounts: {} },
        end
    );
};
WorldStatistics.Chunk._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.x = pbf.readVarint(true);
    else if (tag === 2) obj.z = pbf.readVarint(true);
    else if (tag === 3) obj.totalEntities = pbf.readVarint(true);
    else if (tag === 4) {
        var entry = WorldStatistics.Chunk._FieldEntry4.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.entityCounts[entry.key] = entry.value;
    }
};

// WorldStatistics.Chunk._FieldEntry4 ========================================

WorldStatistics.Chunk._FieldEntry4 = {};

WorldStatistics.Chunk._FieldEntry4.read = function (pbf, end) {
    return pbf.readFields(
        WorldStatistics.Chunk._FieldEntry4._readField,
        { key: '', value: 0 },
        end
    );
};
WorldStatistics.Chunk._FieldEntry4._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readVarint(true);
};

// WorldStatistics._FieldEntry2 ========================================

WorldStatistics._FieldEntry2 = {};

WorldStatistics._FieldEntry2.read = function (pbf, end) {
    return pbf.readFields(
        WorldStatistics._FieldEntry2._readField,
        { key: '', value: 0 },
        end
    );
};
WorldStatistics._FieldEntry2._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readVarint(true);
};

// CommandSenderMetadata ========================================

var CommandSenderMetadata = (exports.CommandSenderMetadata = {});

CommandSenderMetadata.read = function (pbf, end) {
    return pbf.readFields(
        CommandSenderMetadata._readField,
        { type: 0, name: '', uniqueId: '' },
        end
    );
};
CommandSenderMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) obj.name = pbf.readString();
    else if (tag === 3) obj.uniqueId = pbf.readString();
};

CommandSenderMetadata.Type = {
    OTHER: {
        value: 0,
        options: {},
    },
    PLAYER: {
        value: 1,
        options: {},
    },
};

// HeapData ========================================

var HeapData = (exports.HeapData = {});

HeapData.read = function (pbf, end) {
    return pbf.readFields(
        HeapData._readField,
        { metadata: null, entries: [] },
        end
    );
};
HeapData._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.metadata = HeapMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2)
        obj.entries.push(HeapEntry.read(pbf, pbf.readVarint() + pbf.pos));
};

// HeapMetadata ========================================

var HeapMetadata = (exports.HeapMetadata = {});

HeapMetadata.read = function (pbf, end) {
    return pbf.readFields(
        HeapMetadata._readField,
        {
            user: null,
            platform: null,
            platformStatistics: null,
            systemStatistics: null,
        },
        end
    );
};
HeapMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.user = CommandSenderMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2)
        obj.platform = PlatformMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 3)
        obj.platformStatistics = PlatformStatistics.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 4)
        obj.systemStatistics = SystemStatistics.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// HeapEntry ========================================

var HeapEntry = (exports.HeapEntry = {});

HeapEntry.read = function (pbf, end) {
    return pbf.readFields(
        HeapEntry._readField,
        { order: 0, instances: 0, size: 0, type: '' },
        end
    );
};
HeapEntry._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.order = pbf.readVarint(true);
    else if (tag === 2) obj.instances = pbf.readVarint(true);
    else if (tag === 3) obj.size = pbf.readVarint(true);
    else if (tag === 4) obj.type = pbf.readString();
};

// SamplerData ========================================

var SamplerData = (exports.SamplerData = {});

SamplerData.read = function (pbf, end) {
    return pbf.readFields(
        SamplerData._readField,
        {
            metadata: null,
            threads: [],
            classSources: {},
            methodSources: {},
            lineSources: {},
        },
        end
    );
};
SamplerData._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.metadata = SamplerMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2)
        obj.threads.push(ThreadNode.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 3) {
        var entry = SamplerData._FieldEntry3.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.classSources[entry.key] = entry.value;
    } else if (tag === 4) {
        entry = SamplerData._FieldEntry4.read(pbf, pbf.readVarint() + pbf.pos);
        obj.methodSources[entry.key] = entry.value;
    } else if (tag === 5) {
        entry = SamplerData._FieldEntry5.read(pbf, pbf.readVarint() + pbf.pos);
        obj.lineSources[entry.key] = entry.value;
    }
};

// SamplerData._FieldEntry3 ========================================

SamplerData._FieldEntry3 = {};

SamplerData._FieldEntry3.read = function (pbf, end) {
    return pbf.readFields(
        SamplerData._FieldEntry3._readField,
        { key: '', value: '' },
        end
    );
};
SamplerData._FieldEntry3._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// SamplerData._FieldEntry4 ========================================

SamplerData._FieldEntry4 = {};

SamplerData._FieldEntry4.read = function (pbf, end) {
    return pbf.readFields(
        SamplerData._FieldEntry4._readField,
        { key: '', value: '' },
        end
    );
};
SamplerData._FieldEntry4._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// SamplerData._FieldEntry5 ========================================

SamplerData._FieldEntry5 = {};

SamplerData._FieldEntry5.read = function (pbf, end) {
    return pbf.readFields(
        SamplerData._FieldEntry5._readField,
        { key: '', value: '' },
        end
    );
};
SamplerData._FieldEntry5._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// SamplerMetadata ========================================

var SamplerMetadata = (exports.SamplerMetadata = {});

SamplerMetadata.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata._readField,
        {
            user: null,
            startTime: 0,
            interval: 0,
            threadDumper: null,
            dataAggregator: null,
            comment: '',
            platform: null,
            platformStatistics: null,
            systemStatistics: null,
            serverConfigurations: {},
            endTime: 0,
            numberOfTicks: 0,
            sources: {},
            extraPlatformMetadata: {},
        },
        end
    );
};
SamplerMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1)
        obj.user = CommandSenderMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.startTime = pbf.readVarint(true);
    else if (tag === 3) obj.interval = pbf.readVarint(true);
    else if (tag === 4)
        obj.threadDumper = SamplerMetadata.ThreadDumper.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 5)
        obj.dataAggregator = SamplerMetadata.DataAggregator.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 6) obj.comment = pbf.readString();
    else if (tag === 7)
        obj.platform = PlatformMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 8)
        obj.platformStatistics = PlatformStatistics.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 9)
        obj.systemStatistics = SystemStatistics.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
    else if (tag === 10) {
        var entry = SamplerMetadata._FieldEntry10.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.serverConfigurations[entry.key] = entry.value;
    } else if (tag === 11) obj.endTime = pbf.readVarint(true);
    else if (tag === 12) obj.numberOfTicks = pbf.readVarint(true);
    else if (tag === 13) {
        entry = SamplerMetadata._FieldEntry13.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.sources[entry.key] = entry.value;
    } else if (tag === 14) {
        entry = SamplerMetadata._FieldEntry14.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.extraPlatformMetadata[entry.key] = entry.value;
    }
};

// SamplerMetadata.ThreadDumper ========================================

SamplerMetadata.ThreadDumper = {};

SamplerMetadata.ThreadDumper.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata.ThreadDumper._readField,
        { type: 0, ids: [], patterns: [] },
        end
    );
};
SamplerMetadata.ThreadDumper._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) pbf.readPackedVarint(obj.ids, true);
    else if (tag === 3) obj.patterns.push(pbf.readString());
};

SamplerMetadata.ThreadDumper.Type = {
    ALL: {
        value: 0,
        options: {},
    },
    SPECIFIC: {
        value: 1,
        options: {},
    },
    REGEX: {
        value: 2,
        options: {},
    },
};

// SamplerMetadata.DataAggregator ========================================

SamplerMetadata.DataAggregator = {};

SamplerMetadata.DataAggregator.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata.DataAggregator._readField,
        {
            type: 0,
            threadGrouper: 0,
            tickLengthThreshold: 0,
            numberOfIncludedTicks: 0,
        },
        end
    );
};
SamplerMetadata.DataAggregator._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) obj.threadGrouper = pbf.readVarint();
    else if (tag === 3) obj.tickLengthThreshold = pbf.readVarint(true);
    else if (tag === 4) obj.numberOfIncludedTicks = pbf.readVarint(true);
};

SamplerMetadata.DataAggregator.Type = {
    SIMPLE: {
        value: 0,
        options: {},
    },
    TICKED: {
        value: 1,
        options: {},
    },
};

SamplerMetadata.DataAggregator.ThreadGrouper = {
    BY_NAME: {
        value: 0,
        options: {},
    },
    BY_POOL: {
        value: 1,
        options: {},
    },
    AS_ONE: {
        value: 2,
        options: {},
    },
};

// SamplerMetadata.SourceMetadata ========================================

SamplerMetadata.SourceMetadata = {};

SamplerMetadata.SourceMetadata.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata.SourceMetadata._readField,
        { name: '', version: '' },
        end
    );
};
SamplerMetadata.SourceMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.version = pbf.readString();
};

// SamplerMetadata._FieldEntry10 ========================================

SamplerMetadata._FieldEntry10 = {};

SamplerMetadata._FieldEntry10.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata._FieldEntry10._readField,
        { key: '', value: '' },
        end
    );
};
SamplerMetadata._FieldEntry10._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// SamplerMetadata._FieldEntry13 ========================================

SamplerMetadata._FieldEntry13 = {};

SamplerMetadata._FieldEntry13.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata._FieldEntry13._readField,
        { key: '', value: null },
        end
    );
};
SamplerMetadata._FieldEntry13._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = SamplerMetadata.SourceMetadata.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
};

// SamplerMetadata._FieldEntry14 ========================================

SamplerMetadata._FieldEntry14 = {};

SamplerMetadata._FieldEntry14.read = function (pbf, end) {
    return pbf.readFields(
        SamplerMetadata._FieldEntry14._readField,
        { key: '', value: '' },
        end
    );
};
SamplerMetadata._FieldEntry14._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// ThreadNode ========================================

var ThreadNode = (exports.ThreadNode = {});

ThreadNode.read = function (pbf, end) {
    return pbf.readFields(
        ThreadNode._readField,
        { name: '', time: 0, children: [] },
        end
    );
};
ThreadNode._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.time = pbf.readDouble();
    else if (tag === 3)
        obj.children.push(StackTraceNode.read(pbf, pbf.readVarint() + pbf.pos));
};

// StackTraceNode ========================================

var StackTraceNode = (exports.StackTraceNode = {});

StackTraceNode.read = function (pbf, end) {
    return pbf.readFields(
        StackTraceNode._readField,
        {
            time: 0,
            children: [],
            className: '',
            methodName: '',
            parentLineNumber: 0,
            lineNumber: 0,
            methodDesc: '',
        },
        end
    );
};
StackTraceNode._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.time = pbf.readDouble();
    else if (tag === 2)
        obj.children.push(StackTraceNode.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 3) obj.className = pbf.readString();
    else if (tag === 4) obj.methodName = pbf.readString();
    else if (tag === 5) obj.parentLineNumber = pbf.readVarint(true);
    else if (tag === 6) obj.lineNumber = pbf.readVarint(true);
    else if (tag === 7) obj.methodDesc = pbf.readString();
};

// BukkitMappings ========================================

var BukkitMappings = (exports.BukkitMappings = {});

BukkitMappings.read = function (pbf, end) {
    return pbf.readFields(BukkitMappings._readField, { classes: {} }, end);
};
BukkitMappings._readField = function (tag, obj, pbf) {
    if (tag === 1) {
        var entry = BukkitMappings._FieldEntry1.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.classes[entry.key] = entry.value;
    }
};

// BukkitMappings._FieldEntry1 ========================================

BukkitMappings._FieldEntry1 = {};

BukkitMappings._FieldEntry1.read = function (pbf, end) {
    return pbf.readFields(
        BukkitMappings._FieldEntry1._readField,
        { key: '', value: null },
        end
    );
};
BukkitMappings._FieldEntry1._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = ClassMapping.read(pbf, pbf.readVarint() + pbf.pos);
};

// McpMappings ========================================

var McpMappings = (exports.McpMappings = {});

McpMappings.read = function (pbf, end) {
    return pbf.readFields(
        McpMappings._readField,
        { classes: {}, methods: {} },
        end
    );
};
McpMappings._readField = function (tag, obj, pbf) {
    if (tag === 1) {
        var entry = McpMappings._FieldEntry1.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.classes[entry.key] = entry.value;
    } else if (tag === 2) {
        entry = McpMappings._FieldEntry2.read(pbf, pbf.readVarint() + pbf.pos);
        obj.methods[entry.key] = entry.value;
    }
};

// McpMappings._FieldEntry1 ========================================

McpMappings._FieldEntry1 = {};

McpMappings._FieldEntry1.read = function (pbf, end) {
    return pbf.readFields(
        McpMappings._FieldEntry1._readField,
        { key: '', value: null },
        end
    );
};
McpMappings._FieldEntry1._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = ClassMapping.read(pbf, pbf.readVarint() + pbf.pos);
};

// McpMappings._FieldEntry2 ========================================

McpMappings._FieldEntry2 = {};

McpMappings._FieldEntry2.read = function (pbf, end) {
    return pbf.readFields(
        McpMappings._FieldEntry2._readField,
        { key: '', value: '' },
        end
    );
};
McpMappings._FieldEntry2._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// MojangMappings ========================================

var MojangMappings = (exports.MojangMappings = {});

MojangMappings.read = function (pbf, end) {
    return pbf.readFields(
        MojangMappings._readField,
        { classes: {}, methods: {} },
        end
    );
};
MojangMappings._readField = function (tag, obj, pbf) {
    if (tag === 1) {
        var entry = MojangMappings._FieldEntry1.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.classes[entry.key] = entry.value;
    } else if (tag === 2) {
        entry = MojangMappings._FieldEntry2.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.methods[entry.key] = entry.value;
    }
};

// MojangMappings._FieldEntry1 ========================================

MojangMappings._FieldEntry1 = {};

MojangMappings._FieldEntry1.read = function (pbf, end) {
    return pbf.readFields(
        MojangMappings._FieldEntry1._readField,
        { key: '', value: null },
        end
    );
};
MojangMappings._FieldEntry1._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2)
        obj.value = ClassMapping.read(pbf, pbf.readVarint() + pbf.pos);
};

// MojangMappings._FieldEntry2 ========================================

MojangMappings._FieldEntry2 = {};

MojangMappings._FieldEntry2.read = function (pbf, end) {
    return pbf.readFields(
        MojangMappings._FieldEntry2._readField,
        { key: '', value: '' },
        end
    );
};
MojangMappings._FieldEntry2._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// YarnMappings ========================================

var YarnMappings = (exports.YarnMappings = {});

YarnMappings.read = function (pbf, end) {
    return pbf.readFields(
        YarnMappings._readField,
        { classes: {}, methods: {} },
        end
    );
};
YarnMappings._readField = function (tag, obj, pbf) {
    if (tag === 1) {
        var entry = YarnMappings._FieldEntry1.read(
            pbf,
            pbf.readVarint() + pbf.pos
        );
        obj.classes[entry.key] = entry.value;
    } else if (tag === 2) {
        entry = YarnMappings._FieldEntry2.read(pbf, pbf.readVarint() + pbf.pos);
        obj.methods[entry.key] = entry.value;
    }
};

// YarnMappings._FieldEntry1 ========================================

YarnMappings._FieldEntry1 = {};

YarnMappings._FieldEntry1.read = function (pbf, end) {
    return pbf.readFields(
        YarnMappings._FieldEntry1._readField,
        { key: '', value: '' },
        end
    );
};
YarnMappings._FieldEntry1._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// YarnMappings._FieldEntry2 ========================================

YarnMappings._FieldEntry2 = {};

YarnMappings._FieldEntry2.read = function (pbf, end) {
    return pbf.readFields(
        YarnMappings._FieldEntry2._readField,
        { key: '', value: '' },
        end
    );
};
YarnMappings._FieldEntry2._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.key = pbf.readString();
    else if (tag === 2) obj.value = pbf.readString();
};

// ClassMapping ========================================

var ClassMapping = (exports.ClassMapping = {});

ClassMapping.read = function (pbf, end) {
    return pbf.readFields(
        ClassMapping._readField,
        { mapped: '', obfuscated: '', methods: [] },
        end
    );
};
ClassMapping._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.mapped = pbf.readString();
    else if (tag === 2) obj.obfuscated = pbf.readString();
    else if (tag === 3)
        obj.methods.push(MethodMapping.read(pbf, pbf.readVarint() + pbf.pos));
};

// MethodMapping ========================================

var MethodMapping = (exports.MethodMapping = {});

MethodMapping.read = function (pbf, end) {
    return pbf.readFields(
        MethodMapping._readField,
        { mapped: '', obfuscated: '', description: '', searge: '' },
        end
    );
};
MethodMapping._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.mapped = pbf.readString();
    else if (tag === 2) obj.obfuscated = pbf.readString();
    else if (tag === 3) obj.description = pbf.readString();
    else if (tag === 4) obj.searge = pbf.readString();
};
